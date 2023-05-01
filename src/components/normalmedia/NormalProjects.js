import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function maxMedia(){
    return(
        <>
        <h1 className='text-center my-5'>My Projects</h1>
        <Container>
            <Row>
                <Col xs={4}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="react.png"  style={{height:'25vh', width:'16rem', margin:'auto'}}/>
                <Card.Body>
                    <Card.Title>Portofolio</Card.Title>
                    <Card.Text style={{textAlign: 'justify'}}>
                    ini adalah project portofolio yang saya buat dalam rangka menunjukan kemampuan saya dalam membuat web react js
                    </Card.Text>
                    <Button variant="primary" href='https://github.com/FarhanFansuri/port-react.git' target='_blank'>Link Github project</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col xs={4}>
                <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src="angular.png" style={{height:'25vh', width:'11rem', margin:'auto'}}/>
                <Card.Body>
                    <Card.Title>Restaurant</Card.Title>
                    <Card.Text style={{textAlign: 'justify'}}>
                    ini adalah project restaurant yang saya buat ketika saya mengikuti pelatihan front end development zettabyte x upnvy
                    </Card.Text>
                    <Button variant="primary" href='https://github.com/FarhanFansuri/Project-ZettaMiniProject/tree/main/mini_project_upn_zetta_team_J' target='_blank'>Link Github project</Button>
                </Card.Body>
                </Card>
                </Col>
                <Col xs={4}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="vue.png" style={{width:'10rem', margin:'auto'}} />
                <Card.Body>
                    <Card.Title>Todo list</Card.Title>
                    <Card.Text style={{textAlign: 'justify'}}>
                    Ini adalah aplikasi todo list yang telah saya buat untuk mencatat kegiatan yang perlu dilakukan dengan tujuan tertentu
                    </Card.Text>
                    <Button variant="primary" href='https://github.com/FarhanFansuri/todolist-vue.git' target='_blank'>Link Github project</Button>
                </Card.Body>
                </Card>
                </Col>
            </Row>
            <Row className='my-5'>
                <Col xs={4}>
                <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="react.png" style={{height:'25vh', width:'16rem', margin:'auto'}}/>
                <Card.Body>
                    <Card.Title>Simple ChatGPT</Card.Title>
                    <Card.Text style={{textAlign: 'justify'}}>
                    Ini adalah aplikasi yang menyerupai chatGPT yang lebih sederhana yang saya buat dengan memanfaatkan API OpenAI.
                    </Card.Text>
                    <Button variant="primary" href='https://github.com/FarhanFansuri/Simple-ChatGPT-openai.git' target='_blank'>Link Github Project</Button>
                </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default maxMedia;