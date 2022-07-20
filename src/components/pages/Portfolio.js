import React from 'react';
import Img1 from '../images/image_1.jpeg';
import Img2 from '../images/image_2.jpeg';
import Img3 from '../images/image_3.jpeg';
import Img4 from '../images/image_4.jpeg';
import '../styles/style.css';

export default function Portfolio() {
  return (
    <div className='m-3 text-center'>
      <h2>Portfolio</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
  <div className="col">
    <div className="card">
      <img src={Img1} className="card-img-top" alt="..."/>
      <div className="overlay">
        <div className="text">Hello World</div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={Img2} className="card-img-top" alt="..."/>
      <div className="overlay">
        <div className="text">Hello World</div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={Img3} className="card-img-top" alt="..."/>
      <div className="overlay">
        <div className="text">Hello World</div>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src={Img4} className="card-img-top" alt="..."/>
      <div className="overlay">
        <div className="text">Hello World</div>
      </div>
    </div>
  </div>
</div>
    </div>
  );
}
