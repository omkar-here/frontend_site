

// FeedBack Form 



import React from 'react'
import { Button, Form } from 'react-bootstrap'
import Close from '../assets/project-img/close.svg'
export default function FeedBackForm(props) {

    const [formDetails, setFormDetails] = React.useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const handleChange = (e)=>{
        const {name , value} = e.target
        console.log(name)
        setFormDetails({
            ...formDetails,
            [name] : value
        })
    }

    return (
        <div className='feedback-form'>
            <div className='form-title'>
                <p>{props.title}</p>
                <img src={Close} />
            </div>
            <div className='form-section'>
                <p className='form-subtitle'>{props.subtitle}</p>
                <p className='form-slogan red'>{props.slogan}</p>
                <Form>
                    <Form.Group  >
                        <Form.Control type="name" placeholder="Enter your Name" name="name" value={formDetails.name} onChange={handleChange} />
                        <Form.Control type="email" placeholder="Email address" name="email" value={formDetails.email} onChange={handleChange} />
                        <Form.Control type="number" placeholder="Phone number" name="phone" value={formDetails.phone} onChange={handleChange} />
                        <Form.Control as="textarea" row={3} placeholder="Message" name="message" value={formDetails.message} onChange={handleChange} />
                    </Form.Group>
                    <Button>Submit</Button>
                </Form>
            </div>
        </div>
    )
}
