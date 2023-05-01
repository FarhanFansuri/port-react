import SmallSkills from './smallmedia/SmallSkills';
import NormalSkills from './normalmedia/NormalSkills';
import Media from 'react-media';


function Skills(){
    return(
        <>
        <Media query="(max-width: 500px)" render={() =>
         (
            SmallSkills()
         )}
       />
       <Media query="(min-width: 500px)" render={() =>
         (
           NormalSkills()
         )}
       />
       </>
    )
}

export default Skills;