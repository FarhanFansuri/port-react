import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SmallSkills(){

    const skillStyles = {
    display: 'flex',
    justifyContent : 'center',
    alignItems: 'center',
    fontSize: '13px'
}
    return(
        <>
           <h1 className='text-center mt-5'>My Skills</h1>
           <Container className='mt-5'>
                <Row>
                    <Col xs={4} style={skillStyles}>
                        <Card body style={{width:'300px'}}>
                        <img src='flutter.png'  style={{ width:'50px' }} alt='' className='mx-3'/>
                        FLutter
                        </Card>
                    </Col>
                    <Col xs={4} style={skillStyles}>
                    <Card body style={{width:'300px'}}>
                        <img src='django.png'  style={{ width:'75px' }} alt=''/>
                        Django
                        </Card>
                    </Col>
                    <Col xs={4} style={skillStyles}>
                    <Card body style={{width:'300px'}}>
                        <img src='node.png'  style={{ width:'75px' }} alt=''/>
                        Node Js
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col xs={4} style={skillStyles}>
                        <Card body style={{width:'300px'}}>
                        <img src='angular.png'  style={{ width:'55px' }} alt='' className='mx-3'/>
                        Angular
                        </Card>
                    </Col>
                    <Col xs={4} style={skillStyles}>
                    <Card body style={{width:'300px'}}>
                        <img src='react.png'  width={'75px'} alt=''/>
                        React Js
                        </Card>
                    </Col>
                    <Col xs={4} style={skillStyles}>
                    <Card body style={{width:'300px'}}>
                        <img src='vue.png'  width={'55px'} alt=''/>
                        Vue Js
                        </Card>
                    </Col>
                </Row>
                <Row className='mt-5'>
                    <Col xs={4} style={skillStyles}>
                    <Card body style={{width:'300px'}}>
                        <img src='laravel.png'  width={'50px'} alt='' className='mx-3'/>
                        Laravel
                        </Card>
                    </Col>
                    <Col xs={4} style={skillStyles}>
                        <Card body style={{width:'300px'}}>
                        <img src='mysql.png'  style={{ width:'70px' }} className='mx-2' alt=''/>
                        MySQL
                        </Card>
                    </Col>
                    <Col xs={4} style={skillStyles}>
                    <Card body style={{width:'300px'}}>
                        <img src='mongodb.png'  width={'70px'} alt=''/>
                        Mongodb
                        </Card>
                    </Col>
                </Row>
            </Container> 
        </>
    )
}

export default SmallSkills;