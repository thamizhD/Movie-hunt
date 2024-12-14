import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import '../public/App.css'
import { BrowserRouter } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollTop.jsx'

createRoot(document.getElementById('root')).render(


  <BrowserRouter>
  <ScrollToTop/>
    <App/>
  </BrowserRouter>
  
)
