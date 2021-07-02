import './App.scss';
import AppRoute from './core/router';
import { ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
function App(){
  return (
    <div className="App">
        <AppRoute />
        <ToastContainer />
    </div>
  );
}

export default App;
