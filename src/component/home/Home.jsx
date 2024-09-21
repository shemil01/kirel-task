import { useMediaQuery } from 'react-responsive';
import MobileHome from './MobileHome';
import DesktopHome from './DesktopHome';

const Home = () => {

  // view on mobile that time automatically select mobile home component

  const mobileView = useMediaQuery({ query: "(max-width: 1000px)" })


  //checking view on mobile or desktop
  return mobileView ? <MobileHome/> : <DesktopHome/>
}

export default Home