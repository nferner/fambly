import React from 'react'
import NavBarView from './navigation/navBarView.jsx'
import CalResView from './calRes/calResView.jsx'
import FooterView from './footer/footerView.jsx'
import InfoView from './info/infoView.jsx'

class App extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div class='appWrap'>
        <NavBarView />
        <div class='parallax parallaxOne' />
        <CalResView />
        <div class='parallax parallaxTwo' />
        <InfoView />
        <div class='parallax parallaxThree' />
        <FooterView />
      </div>
    )
  }
}

export default App
