
// card used in second last component
import React from 'react'
import './InfoCard.css'
export default function InfoCard(props) {

    const style = {
        color:props.fontColor
    }
    const list = props.cardInfo.map((info)=>{
        return(
            <li className='info-card-li'>
                <img src={info.icon_url}/>
                <h4 style={style}>{info.detail}</h4>
                {info.location_img && <img src={info.location_img} />}
            </li>
        )
    })
  return (
    <div className='Info-card'>
        <div className='heading'>
            <img src={props.icon}/>
            <h4 className='info-card-title' style={style}>{props.title}</h4>
        </div>
        <ul className='info-card-list'>
            {list}
        </ul>
    </div>
  )
}
