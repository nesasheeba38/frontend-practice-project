import Table from 'react-bootstrap/Table';
import { WorkExperience } from '../BodySection/WorkExperience'
import { OpenSourceWork } from '../BodySection/OpenSourceWork';
import { Education } from '../BodySection/Education';
import {Col,Row,Container} from 'react-bootstrap';
export const Projects=()=>{
    return(
      <Container style={{marginTop:"120px"}}>
         <Row>
             <Col md={3} style={{marginTop:"117px"}}>
                <Table className='table table-bordered border-dark w-100'>
                  <thead>
                    <tr>
                      <th>Projects</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr>
                      <td>HTML Only Portfolio</td>
                   </tr>
                   <tr>
                     <td>Calculator</td>
                   </tr>
                   <tr>
                     <td>Quiz App</td>
                   </tr>
                   <tr>
                     <td>Countown Timer</td>
                   </tr>
                   <tr>
                      <td>Product Upcoming Page</td>
                   </tr>
                 </tbody>
               </Table>
             </Col>
           <Col md={9}>
              <Row>
                <Col md={6}>
                <div className="mb-4">
                 <WorkExperience/>
                </div>
                <div className="mb-4">
                 <OpenSourceWork/>
                </div>
                </Col>
                <Col md={6}>
                  <Education/>
                </Col>
               </Row>
             </Col>
          </Row>
  </Container> 
    )
}