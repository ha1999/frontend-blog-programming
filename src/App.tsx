import './App.scss';
import AppRoute from './core/router';
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react';
import { failureLocation, successLocation } from './core/utils/location';
function App(){
  
  useEffect(()=>{
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(successLocation, failureLocation)
    }
  },[])

  return (
    <div className="App">
        <AppRoute />
        <ToastContainer />
    </div>
  );
}

export default App;
