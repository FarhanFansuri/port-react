// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
import Media from 'react-media'
import normalProjects from './normalmedia/NormalProjects'
import minMedia from './smallmedia/SmallProjects'

function Projects(){
    return(
        <>
         <Media query="(max-width: 500px)" render={() =>
          (
            minMedia()
          )}
        />
        <Media query="(min-width: 500px)" render={() =>
          (
            normalProjects()
          )}
        />
        </>
    )
}

export default Projects;