import React from 'react'
import NavBarView from './navigation/navBarView.jsx'
import CalResView from './calRes/calResView.jsx'

class App extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div class='appWrap'>
        <NavBarView />
        <CalResView />
      </div>
    )
  }
}

export default App
