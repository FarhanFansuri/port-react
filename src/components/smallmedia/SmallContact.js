import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function SmallContact(){
    return (
        <>
        <Container className='py-5'>
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
                    <h1 className='text-center mt-3 mb-5'>Send me email</h1>
                    <div  className='d-flex align-items-center justify-content-center'>
                    <form action="https://formsubmit.co/your@email.com" method="POST">
                    <input type="hidden" name="_subject" value="New submission!"/>
                    <input type="email" name="email" placeholder="Your email"/>
                    <br/>
                    <textarea name="message" className='my-4' placeholder="Details of your problem"></textarea>
                    <input type="hidden" name="_captcha" value="false"/>
                    <br/>
                    <button type="submit" className='btn btn-info' >Send</button>
                    </form>                   
                    </div>
              </Container>
        </>
    )
}

export default SmallContact;
