import logo from './logo.svg';
import './App.css';
import SampleCom from './components/Sam-1/sample';
import IndexCom from './components/Sam-2/indexes';
import Hooks from './components/hookcom/hookcomp';
import Sign from './components/registration/sign-up/sign';
import Log from './components/registration/login/log';
import Datalist from './components/passingState/datalist/datalist';

function App(){
  return(
    // <div className = "App">
      // {/* <SampleCom data ='bala'/>
      // <IndexCom data ='murugan'/> */}
      // {/* <Hooks/> */}
      // {/* <Sign/> */}
      // {/* <Log/> */}
      <Datalist data = 'User'/>
    // </div>
  )
}
    
export default App;
