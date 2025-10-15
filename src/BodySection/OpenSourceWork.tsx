import Card from 'react-bootstrap/Card';
export const OpenSourceWork=()=>{
    return(
        <Card style={{ width: '18rem',textAlign:'left'}}>
      <Card.Body>
        <Card.Title>OpenSource Work</Card.Title>
        <Card.Text>Contribute to 50 opensource projects.Made my own projects with 200 GitHub stars</Card.Text>
        <Card.Link href="#">Visit my GitHub Profile</Card.Link>
      </Card.Body>
    </Card>
    )
}