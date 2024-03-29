import React from "react";
import Slider from "react-slick";
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import dogProfilePic from '../../images/dalmation.jpg';
import './DogCarousel.css'
import { Link } from 'react-router-dom';


export const GET_ALL_DOG_QUERY = gql`
  {
    dogs {
      id
      name
      weight
      photos {
        sourceUrl
      }
    }
  }
`;

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      style={{display: "block", zIndex: 4, marginLeft: '50px', fontSize: '24px' }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", marginRight: '50px', height: '24px', zIndex: 4, }}
      onClick={onClick}
    />
  );
}

export const DogCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    slidesToShow: 3,
    adaptiveHeight: true,
    arrows: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    };

  const { loading, error, data } = useQuery(
    GET_ALL_DOG_QUERY
  )


  if(loading) return <p>Loading....</p>;
  if(error) return <p>Error :</p>;
  
  const smallDogs = data.dogs.filter(dog => dog.weight < 15)
  const mediumDog = data.dogs.filter(dog => dog.weight > 16 && dog.weight < 40)
  const largeDog = data.dogs.filter(dog => dog.weight > 40) 
  

  const sizes = [smallDogs, mediumDog, largeDog]


  const dogsArray = sizes.map(size=> {
    return size.map(dog => {
      const dogImage = !dog.photos[0] ? dogProfilePic : dog.photos[0].sourceUrl;
      return  <Link to={`/dogprofile/${dog.id}`} key={dog.id}>
        <div id='dog-div'>
          <div id='dog-container' style={{
            backgroundImage: `url(${dogImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '350px', 
          }}> 
          <p className='dog-desc'>{dog.name}</p>
          </div>
        </div>
      </Link>
    })
  
  } )
  
  
  return (
    <section className='slider-wrapper'>
      <h2>SMALL PUPS</h2>
      <Slider {...settings} arrows={true}>
        {dogsArray[0]}
      </Slider>
      <h2>MEDIUM PUPS</h2>
      <Slider {...settings} arrows={true}>
        {dogsArray[1]}
      </Slider>
      <h2>LARGE PUPS</h2>
      <Slider {...settings} arrows={true}>
        {dogsArray[2]}
      </Slider>
    </section>
  );

}