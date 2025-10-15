import Card from 'react-bootstrap/Card';
export const Education=()=>{
    return(
          <Card style={{ width: '18rem',textAlign:'left'}}>
      <Card.Body>
        <Card.Title>Education</Card.Title>
        <Card.Text>Graduated with 3.76 out of 4 CGPA.Won Acme Hackthon.Organised 30 Sessions</Card.Text>
        <div style={{lineHeight: "17px",width:"168px",height:"366px"}}>
        <h5>Courses I took</h5>
        <p>-Obeject Oriented Programming</p>
        <p>-Data Structures and Algoriths</p>
        <p>-Web Engineering</p>
        <p>-Arificial Intelligence</p>
        <p>-Human Computer Interaction</p>
        <p>-Computer Graphics</p>
        <p>-Database Managemnet Systems</p>
        <p>-Distributed Database Systems</p>
        <p>-Discreet Mathematics</p>   
        </div>   
      </Card.Body>
    </Card>
    )
}