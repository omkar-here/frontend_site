// second last Component of landing page

import React from 'react'
import './infoFooter.css'
import InfoCard from './InfoCard'
import Canada from '../assets/project-img/Canada.svg'
import Card_icon from '../assets/project-img/Card_icon.svg'
import Envelope from '../assets/project-img/Envelope.svg'
import DarkEnvelope from '../assets/project-img/DarkEnvelope.svg'
import Phone from '../assets/project-img/Phone.svg'
import DarkPhone from '../assets/project-img/DarkPhone.svg'
import US from '../assets/project-img/UnitedStates.svg'
import { Container } from 'react-bootstrap'
import FeedBackForm from './FeedBackForm'
export default function InfoFooter() {

    const list = [{icon_url : Phone , detail:"+91-(470) 646-6463",location_img:Canada} , 
                {icon_url : Phone, detail:"+91-(470) 646-6463",location_img:US},
                {icon_url : Envelope , detail:"support@skillbook.com"}
            ]

    const list2 = [{icon_url : DarkPhone , detail:"+91-(470) 646-6463",location_img:Canada} , 
                {icon_url : DarkPhone, detail:"+91-(470) 646-6463",location_img:US},
                {icon_url : DarkEnvelope , detail:"support@skillbook.com"}
            ]
    
  return (
    <div className='info-footer'>
        {/* <Container> */}
        <div className='section-left'>
            <InfoCard 
                icon={Card_icon}
                title="Pre Registration Enquiry"
                cardInfo={list}
                fontColor="#fff"
            />
        </div>
        <div className='section-right'>
            <InfoCard 
                icon={Card_icon}
                title="Pre Registration Enquiry"
                cardInfo={list2}
                fontColor="#555"
            />

            <FeedBackForm
                title={"Talk to our Learning Consultant"}
                subtitle={"Hello there! Hit us up with your questions. "}
                slogan={"We are happy to help ! :)"}
            />
        </div>
        {/* </Container> */}
    </div>
  )
}
