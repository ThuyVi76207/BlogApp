import React from 'react';
import { images } from '../../../constants';

const Hero = () => {
  return (
    <section>
      <div>
        <h1>Read the most interesting articles</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>

        <div>
          <div>
            <input type="text" />
          </div>
          <button>Search</button>
        </div>

        <div>
          <span>Popular Tags :</span>
          <ul>
            <li>Design</li>
            <li>User Experience</li>
            <li>User Interfaces</li>
          </ul>
        </div>
      </div>
      <div>
        <img src={images} />
      </div>
    </section>
  );
};

export default Hero;
