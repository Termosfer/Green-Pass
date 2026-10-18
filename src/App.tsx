import { BrowserRouter } from 'react-router/internal/react-server-client'
import './App.css'
import PublicRouter from './router/PublicRouter'

function App() {

  return (
 <BrowserRouter>
 <PublicRouter />
 </BrowserRouter>
  )
}

export default App
