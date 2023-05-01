import Container from 'react-bootstrap/Container';
import Typewriter from 'typewriter-effect';
import ListGroup from 'react-bootstrap/ListGroup';


function smallHome(){
//koreksi
const imageStyle = {
    borderRadius:'20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin:'auto'
}
    return(
<Container>
        <h1 className='display-1 mt-5'>Hi &#128075;, I Am
        <Typewriter
        options={{
            strings: ['Farhan Fansuri'],
            autoStart: true,
            loop: true,
        }}
        /></h1>
          <div className='profile-image'>
            <img src='main-image.jpeg' style={imageStyle} alt='Hello' width={'150px'} />
          </div>
        <div style={{ paddingTop:'10vh'}}>
         <ListGroup>
        <ListGroup.Item className='info-list'>INFO</ListGroup.Item>
        <ListGroup.Item variant="primary" className='info-list'>I am 21 years old</ListGroup.Item>
        <ListGroup.Item variant="secondary" className='info-list'>I am a student at UPN "Veteran" Yogyakarta</ListGroup.Item>
        <ListGroup.Item variant="success" className='info-list'>I am informatics engineering student</ListGroup.Item>
        <ListGroup.Item variant="danger" className='info-list'>This website is build with react </ListGroup.Item>
        </ListGroup>
        </div>
    </Container>
    )
}

export default smallHome;