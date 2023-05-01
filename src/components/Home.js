import Media from 'react-media'
import normalHome from './normalmedia/NormalHome';
import smallHome from './smallmedia/SmallHome';


function Home() {

  return (
    <>
         <Media query="(max-width: 500px)" render={() =>
          (
            smallHome()
          )}
        />
        <Media query="(min-width: 500px)" render={() =>
          (
            normalHome()
          )}
        />
        </>
  );
}

export default Home;