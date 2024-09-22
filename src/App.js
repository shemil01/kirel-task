
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Home from './component/home/Home';
import Leaders from './component/leaders/Leaders';
import Services from './component/services/Services';
import Testimoni from './component/testimoni/Testimoni';
import Works from './component/works/Works';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
<div>
  <Home/>
  <About/>
  <Works/>
   <Services/>
  <Leaders />
  <Testimoni/>
  <Contact/>

  {/* toast library */}
  <ToastContainer />
</div>
  );
}

export default App;
