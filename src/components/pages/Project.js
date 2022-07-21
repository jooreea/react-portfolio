import React from 'react';
import '../styles/style.css';

export default function Project(props) {
  return (
    <div className='m-3 text-center'>
      <h2>Portfolio</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
          {props.projects.map(project => (
            <div className="col" key={project.name}>
              <div className="card">
                <img src={project.image} className="card-img-top" alt="..."/>
                <div className="overlay">
                  <div className="text">{`${project.name}`}</div>
                  <a className = "text m-3" href={project.github} target="blank">github</a>
                  <a className = "text m-3" href={project.url} target="blank">app</a>
                </div>
              </div>
            </div>
          ))}
      

  {/* <div className="col">
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
  </div> */}
      </div>
    </div>
  );
}
