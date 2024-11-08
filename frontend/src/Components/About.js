
import React from 'react';
// import { Link } from 'react-router-dom';
import './Styles/About.css'; 

function About() {
  return (
    <div className='data'>
    <div className="About">
      <h1>Our Mission</h1>
        <p>Personal biases often influence Online reviews, leading to inaccurate or misleading
            information. This affects the accuracy of public sentiment analysis and can result in feedback
            that doesn't reflect genuine customer satisfaction or dissatisfaction. For instance, many positive
            or negative reviews may not indicate quality, but rather the disproportionate influence of vocal
            individuals or groups. To ensure reliable feedback aggregation and sentiment analysis, it's
            crucial to identify and address these biases. Businesses and analysts make decisions based on
            potentially inaccurate information, harming customer trust and impacting business outcomes.
            I aim to develop a more advanced system to detect and mitigate these biases, providing a more
            accurate representation of customer sentiment and helping businesses make informed
            decisions.</p>
    </div>
    </div>
  );
}

export default About;
