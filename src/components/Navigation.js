import React, { useState } from 'react';
import Header from './Header';
import Project from './pages/Project';
import About from './pages/About';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Footer from './Footer';

import Img1 from './images/image_1.png';
import Img2 from './images/image_2.png';
import Img3 from './images/image_3.png';
import Img4 from './images/image_4.png';
import Img5 from './images/image_5.png';
import Img6 from './images/image_6.png';

const projects = [
  {
    image: Img1,
    name:'local-exchange-hub',
    github:'https://github.com/rkutsel/local-exchange-hub',
    url:'https://local-exchange-hub.herokuapp.com/',
  }, 
  {image: Img2,
    name:'marvel-character-finder',
    github:'https://github.com/rajeswarivmarimuthu/marvel-character-finder',
    url:'https://rajeswarivmarimuthu.github.io/marvel-character-finder/',
  }, 
  {image: Img3,
    name:'tech-blog',
    github:'https://github.com/jooreea/tech-blog',
    url:'https://fathomless-retreat-46424.herokuapp.com/',
  }, 
  {image: Img4,
    name:'note-taker',
    github:'https://github.com/jooreea/note-taker',
    url:'https://agile-forest-14677.herokuapp.com/',
  },
  {image: Img5,
    name:'weather-dashboard',
    github:'https://github.com/jooreea/weather-dashboard',
    url:'https://jooreea.github.io/weather-dashboard/',
  },
  {image: Img6,
    name:'work-day-scheduler',
    github:'https://github.com/jooreea/work-day-scheduler',
    url:'https://jooreea.github.io/work-day-scheduler/',
  },
];

export default function Navigation() {
  const [currentPage, setCurrentPage] = useState('About');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Portfolio') {
      return <Project projects={projects}/>;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className='m-5'>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
      <Footer />
    </div>
  );
}
