import {Row,Col} from 'react-bootstrap'
import Bird1 from '../assets/Bird1.jpg'
import Deer from '../assets/Deer.jpg'
import capybara from '../assets/capybara.jpg'
import cheeta from '../assets/Cheeta.jpg'
import Eagle from '../assets/Eagle.jpg'
import Rhinoceros from '../assets/Rhinoceros.jpg'
export const GridImage=()=>{
    return(

        <div className='container my-4'>
        <Row className="g-0">
          <Col sm={4}>
           <Row >
              <Col sm={12}><img src={Bird1} className='w-100'/></Col>
              <Col sm={12}><img src={Deer}className='w-100'/></Col> 
           </Row>
          </Col>
          <Col sm={4}>
            <Row>
              <Col sm={12}><img src={cheeta} className='w-100'/></Col>
              <Col md={12}><img src={capybara} className='w-100'style={{height:"457px"}}/></Col>
            </Row>
          </Col>
          <Col sm={4}>
            <Row>
              <Col sm={12}><img src={Eagle} className='w-100' style={{height:"457px"}}/></Col>
              <Col sm={12}><img src={Rhinoceros} className='w-100'/></Col>
            </Row>
          </Col>
        </Row>
        </div>
        
    )
}