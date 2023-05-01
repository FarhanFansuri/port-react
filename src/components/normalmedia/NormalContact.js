import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function NormalContact(){
    return (
        <>
        <Container className='py-5'>
            <Row>
                <Col xs={6} style={{height:'75vh'}}>
                    <Container>
                    <h1 className='text-center'>Contact me!</h1>
                    <Card body className='my-5' >
                        <Button variant="outline-primary" href='https://www.linkedin.com/in/mochammad-farhan-fansuri-bb5474226/' target='_blank' className=''>Kunjungi</Button>
                    <img src='linkedin.png'  width={'40px'} className='mx-3' alt=''/>
                        Linkedin
                        </Card>
                    <Card body className='my-5'>
                    <Button variant="outline-dark" href='https://github.com/FarhanFansuri' target='_blank' className=''>Kunjungi</Button>
                    <img src='github.png'  width={'60px'} className='mx-3' alt=''/>
                        Github</Card>
                    <Card body className='my-5'>
                    <Button variant="outline-danger" href='https://dribbble.com/FarhanFanS' target='_blank' className=''>Kunjungi</Button>
                    <img src='dribbble.png'  width={'40px'} className='mx-3' alt=''/>
                        Dribbble</Card>
                    </Container>
                </Col>
                <Col xs={5} style={{ backgroundColor:'black', height:'75vh', borderRadius:'20px'}}>
                    <h1 className='text-center my-5 text-white'>Send me email &#128231;</h1>
                    <form action="https://formsubmit.co/your@email.com" method="POST">
                    <input type="hidden" name="_subject" value="New submission!"/>
                     <input type="email" name="email" placeholder="Your email"/>
                    <textarea name="message" placeholder="Details of your problem"></textarea>
                    <input type="hidden" name="_captcha" value="false"/>
                    <button type="submit">Send</button>
                    </form>                   
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default NormalContact;
