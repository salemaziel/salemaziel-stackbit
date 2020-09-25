import React from 'react'
import { openPopupWidget } from 'react-calendly';
import Button from 'react-bootstrap/Button'

//import calendlystyle from './nav.module.css'

//const CalendlyButton = ({ url, prefill, pageSettings, utm }) => {
//  const onClick = () => openPopupWidget({ url, prefill, pageSettings, utm });
const CalendlyButton = ({ url }) => {
    const onClick = () => openPopupWidget({ url:"https://calendly.com/salemaziel/30-min" });
  return <Button onClick={onClick} /*className={calendlystyle.NavBook}*/ className="button" url={url} >Book An Appointment</Button>
}

export default CalendlyButton