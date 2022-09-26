import Router from './router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

export function App() {
  return (
    <div className="App">

          <Router />
          <ToastContainer />
    </div>
  )
}


