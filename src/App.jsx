import React from 'react'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import "./App.css"
const App = () => {
  return (
    <React.Fragment>
    <section className='flex'>
    <Sidebar />
    <Main />
    </section>
    </React.Fragment>
  )
}

export default App