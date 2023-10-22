import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function BasicExample() {
  return (
    <div className='container' >
      <Card style={{ width: '100%' }}>
          <Card.Img variant="top" src="assets/img/elaicheesecake.png " style={{ width: '100px', height: '120px' }} />
           <Card.Body style={{paddingBottom: '50px',marginLeft: '300px'}}>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
            </Card.Body>
       </Card>
    </div>
  );
}

export default BasicExample;