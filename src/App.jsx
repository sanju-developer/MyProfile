import React from 'react'
import './App.Scss'
import Header from './components/Header/Header'
import Routing from './routes/routing'
import history from './history'

function App() {
  return (
    <div className="App" style={{ width: '100%', height: '100%' }}>
      <Header history={history} />
      <Routing />
    </div>
  )
}

export default App
