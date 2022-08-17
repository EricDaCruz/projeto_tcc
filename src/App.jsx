import Router from './router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';

export function App() {
  window.alert('O site está em beta, e está disponível somente para testes.');
  
  return (
    <div className="App">

          <Router />
          <ToastContainer />
    </div>
  )
}


