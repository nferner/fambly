import React from 'react'
import HomeNav from './homeNav.jsx'
import CalResNav from './calResNav.jsx'

class NavBarView extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div class='navBarViewWrap'>
        <p class='placeHolder'>This is where a NavBar will go.</p>
        <HomeNav />
        <CalResNav />
      </div>
    )
  }
}

export default NavBarView
