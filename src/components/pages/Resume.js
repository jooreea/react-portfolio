import React from 'react';
import Pdf from '../images/Jooree_Ahn_Resume.pdf'

export default function Resume() {
  return (
    <div className='m-3'>
      <h2>Resume</h2>
      <a href={Pdf} target="blank">Download</a>
      <h3>Front-end Proficiencies</h3>
      <ul>
        <li>HTML/CSS</li>
        <li>JavaScript/jQuery</li>
        <li>Responsive Design</li>
        <li>Bootstrap</li>
        <li>Progressive Web Applications (PWAs)</li>
        <li>Local Storage, Session Storage, IndexedDB</li>
        <li>React.js</li>
      </ul>
      <h3>Back-end Proficiencies</h3>
      <ul>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Express.js</li>
        <li>Node.js</li>
        <li>API</li>
        <li>Rest</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}
