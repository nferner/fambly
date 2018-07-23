import React from 'react'
import NavBarView from './navigation/navBarView.jsx'
import CalResView from './calRes/calResView.jsx'
import FooterView from './footer/footerView.jsx'

class App extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div class='appWrap'>
        <NavBarView />
        <CalResView />
        <FooterView />
      </div>
    )
  }
}

export default App
