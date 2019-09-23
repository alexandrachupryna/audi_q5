import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';
import auto from './images/auto.png';
import shadow1 from './images/Shadow1.png';
import shadow2 from './images/Shadow2.png';
import shadow3 from './images/Shadow3.png';


function Banner() {
    return (
      <div className="banner">
        <Intormation />
        <Image />
      </div>
    );
  }
  
  export default Banner;
  
function Intormation() {
  return(
    <div className="banner_div">
      <Container />
    </div>
  )
}

function Image() {
  return(
    <div className="auto_block">
      <img src={auto} alt="Audi Q5" className="auto_img" />
      <img src={shadow1} alt="shadow" className="shadowAuto" />
      <img src={shadow2} alt="shadow" className="shadowAuto" />
      <img src={shadow3} alt="shadow" className="shadowWheel1" />
      <img src={shadow3} alt="shadow" className="shadowWheel2" />
      <img src={shadow3} alt="shadow" className="shadowWheel3" />
      <img src={shadow3} alt="shadow" className="shadowWheel4" />
    </div>
    
  )
}

function Container() {
  return (
    <div className="container">
      <Model />
      <LeaseDeals/>
      <Description/>
    </div>
  )
}

function Model () {
  return (
    <div className="model">
      <h2 className="model_title">2019 Q5</h2>
      <p className="model_type">2.OT Quattro Premium</p>
    </div>
  )
}

function LeaseDeals() {
  return (
    <div className="leaseDeals">
      <LeaseDealItem 
        note="Everyone Qualifies" 
        amountDollars={499} 
        amountCents={39}
        signing={3.500}
        additionalInfo="| $0 Security Deposit"
      />
      <LeaseDealItem 
        note="Current Audi Owners" 
        amountDollars={479}
        signing={3.500}
      />
    </div>
  )
}

function LeaseDealItem(props) {
  const { note, amountDollars, amountCents, signing, additionalInfo } = props;
  return (
    <div className="leaseDealItem">
      <Note 
        note={note} 
      />
      <Amount 
        amountDollars={amountDollars} 
        amountCents={amountCents} 
        signing={signing} 
      />
      <Signing 
        signing={signing} 
        additionalInfo={additionalInfo}
      />
    </div>
  )
}

function Note(props) {
  return (
    <p className="note">{props.note}</p>
  )
}

Note.propTypes = {
  note: PropTypes.string.isRequired
}

function Amount(props) {
  return (
    <p className="amount">$ <span className="dollars">{props.amountDollars}</span> {props.amountCents} Mo. Lease</p>
  )
}

Amount.propTypes = {
  amountDollars: PropTypes.number.isRequired,
  amountCents: PropTypes.number
}

function Signing(props) {
  return (
    <p className="description signing">${props.signing.toFixed(3)} Due at Signing {props.additionalInfo}</p>
  )
}

Signing.propTypes = {
  signing: PropTypes.number.isRequired,
  additionalInfo: PropTypes.string
}

function Description() {
  return (
    <p className="description">
      MSRP: $47,450. 10K mi/yr. lease excludes tax, title, and plate free. For qualified customers though 
      Audi Financial Services. Vehicle image shown for ilustrative purposes only. #WC2776. Offer ends 09/03/19.
    </p>
  )
}