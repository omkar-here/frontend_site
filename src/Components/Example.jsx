import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import "../assets/styles/example.css"
import Card from 'react-bootstrap/Card';
import data from "../assets/styles/data.json"
function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <button className='add_btn'
      type="button"
      
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}
function Ex(props){
  const {A,Q,id}=props
  // console.log(props)
  // console.log(A,Q,id)
  return (

    <div>
    
    <Accordion defaultActiveKey="0" className='togl'>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">+</CustomToggle>
          {Q}
        </Card.Header>
        
        <Accordion.Collapse eventKey="1">
          <Card.Body>{A}</Card.Body>
        </Accordion.Collapse>
      </Card>
      
    </Accordion>
    </div>
  );
}
// console.log(data)
const Ele=data.map(deta=>{
    return <Ex key={deta.id} {...deta} />
  })

  
function Example() {
  return (

    <div className='pg'>
      <div>
      <div className='line_1' style={{color:"#f00"}}>FAQ</div>
      <div className='line_2'>Have Questions?<strong style={{color:"#f00"}}>We have got answers</strong></div>
    </div>
      {Ele}</div>
   
  )
 
}

export default Example;