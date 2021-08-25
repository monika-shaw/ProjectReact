import react from 'react';

import Slider from "react-slick";


import './Example.css';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows:true,

  };


const Slide = () => {
    return(
        <react.Fragment>
             <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div>
        <img src='https://picsum.photos/id/0/367/267'/>
          </div>
          <div>
          <img src='https://picsum.photos/id/1/367/267'/>
          </div>
          <div>
          <img src='https://picsum.photos/id/10/367/267'/>
          </div>
          <div>
          <img src='https://picsum.photos/id/100/367/267'/>
          </div>
          <div>
          <img src='https://picsum.photos/id/1000/367/267'/>
          </div>
          <div>
          <img src='https://picsum.photos/id/1001/367/267'/>
          </div>
          <div>
          <img src='https://picsum.photos/id/1002/367/267'/>
          </div>
          <div>
          <img src='https://picsum.photos/id/1003/367/267'/>
          </div>
          <div>
          <img src='https://picsum.photos/id/100/367/267'/>
          </div>
        </Slider>
      </div>
        </react.Fragment>
    );
}
export default Slide;