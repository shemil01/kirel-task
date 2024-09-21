import { useMediaQuery } from 'react-responsive';
import Mobile from './Mobile';
import Desktop from './Desktop';

const Works = () => {
  
  // view on mobile that time automatically select mobile home component

  const mobileView = useMediaQuery({ query: "(max-width: 1000px)" })


  //checking view on mobile or desktop
  return mobileView ? <Mobile /> : <Desktop/>
}

export default Works