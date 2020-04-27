import React from 'react';
import './Donation.css';
import QrCode from './UPIQR.jpg';

const donation = () => {
  return(
    <div className='main'>
      <h1>Donate to COVID-19 Relief Fund</h1>
      <p>During this unprecendented time, India needs all the help available to control
      the Coronavirus situation. The government has set up a fund, namely the PM-Cares Fund
      (Prime Minister's Citizen Assistance and Relief in Emergency Situations Fund), to tackle
      the challenges arising out of this ongoing crisis.</p>
       <blockquote>
        <p>PM-CARES fund is aimed at strengthening the fight against COVID-19. It will further
        availability of quality treatment and encourage research on ways to beat Coronavirus.
        I urge people from all walks of life to contribute to PM-CARES. Together, let's solve
        challenges of the present and protect the future.</p>
       </blockquote>
       <p>You too can play an integral role in this fight! Tap on the button below to donate to PM-CARES
       Fund. You will be redirected to the official governement website.</p>
      <button><a href='https://www.pmcares.gov.in/en/' target='_blank'>Donate</a></button>
      <h2>Other modes for donating:</h2>
      <ol>
        <li>
          <h3>BHIM UPI</h3>
          <p>Scan the QR code through your BHIM UPI</p>
          <img className='qr' src={QrCode} alt='UPI QR Code' />
        </li>
        {/*<li>
          <h3>Bank Transfer</h3>
          <p>Transfer money to any of the following accounts</p>
          <table className='table'>
            <tr>
              <td>Bank Name</td>
              <td>State Bank of India</td>
            </tr>
            <tr>
              <td>Branch Name</td>
              <td>New Delhi Main Branch</td>
            </tr>
            <tr>
              <td>Account Name</td>
              <td>PM CARES</td>
            </tr>
            <tr>
              <td>Account Number</td>
              <td>2121PM20202</td>
            </tr>
            <tr>
              <td>IFSC Code</td>
              <td>SBIN0000691</td>
            </tr>
          </table>
        </li>*/}
      </ol>
    </div>
  )
}

export default donation;
