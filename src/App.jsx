import {Route,Routes} from 'react-router-dom'
import './App.css'
import Maincontext from './context/Maincontext'
import Booklist from './compoents/Booklist'
import Navbar from './compoents/Navbar'
import Addbooks from './compoents/Addbooks'
function App() {
  
  return (
    <div className='App' >
    <Maincontext>
      <Navbar/>
      <Booklist/>
      <Addbooks/>
    </Maincontext>
    </div>
  )
}

export default App
