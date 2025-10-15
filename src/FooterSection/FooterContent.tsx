import Card from 'react-bootstrap/Card';
export const FooterContent=()=>{
    return(
        <>
        <div style={{alignItems: "flex-start", display: "flex",marginTop:"80px"}}>
            <h3>Reviews From my Teachers</h3>
        </div>
        <div style={{display: "flex", justifyContent: "space-between", width: "962px",marginTop:"20px" }}>
        
          <Card style={{ width: '18rem',textAlign:'left',border:"2px solid #7e7a7adc"}}>
             <Card.Text>John doe was a brilliant student ;always stood out with his assignments.</Card.Text>
             <Card.Text>Jane Dow Assistant Professor</Card.Text>
          </Card>
      
         <Card style={{ width: '18rem',textAlign:'left',border:"2px solid #7e7a7adc"}}>
             <Card.Text>John doe was a brilliant student ;always stood out with his assignments.</Card.Text>
             <Card.Text>Jane Dow Assistant Professor</Card.Text>
          </Card>
      
         <Card style={{ width: '18rem',textAlign:'left',border:"2px solid #7e7a7adc"}}>
             <Card.Text>John doe was a brilliant student ;always stood out with his assignments.</Card.Text>
             <Card.Text>Jane Dow Assistant Professor</Card.Text>
          </Card>
      </div>
    </>
    )
}