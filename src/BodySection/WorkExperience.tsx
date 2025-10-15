import Card from 'react-bootstrap/Card';
export const WorkExperience=()=>{
    return(

        <Card style={{ width: '18rem',textAlign:'left'}}>
      <Card.Body>
        <Card.Title>Work Experience</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">roadmap.sh</Card.Subtitle>
        <Card.Text>Solved all the frontend Projects</Card.Text>
        <Card.Link href="#">Visit my Profile</Card.Link>
      </Card.Body>
    </Card>
    )
}