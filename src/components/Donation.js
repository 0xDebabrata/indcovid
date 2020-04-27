import React from 'react';
import './Donation.css';

const donation = () => {
  return(
    <div className='main'>
      <h1>Donate to COVID-19 Relief Fund</h1>
      <p>During this unprecendented time, India needs all the help available to fight the coronavirus crisis.
      The government has set up a fund, namely the PM-Cares Fund, to tackle the challenges arising out of this
       ongoing crisis.</p>
       <blockquote>
        <p>PM-CARES fund is aimed at strengthening the fight against COVID-19. It will further availability
        of quality treatment and encourage research on ways to beat Coronavirus. I urge people from all walks
        of life to contribute to PM-CARES. Together, let's solve challenges of the present and protect
        the future.</p>
       </blockquote>
       <p>You too can play an integral role in this fight!</p>
      <button><a href='https://www.pmcares.gov.in/en/' target='_blank'>Donate</a></button>
    </div>
  )
}

export default donation;
