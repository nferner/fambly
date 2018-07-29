import React from 'react'

class NavBarView extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div class='navBarViewWrap'>
        <div class='navBarDiv'>
          <div class='navDivItem'>
            <a href='#home'>
              <span>
                <h3 class='nav-header'>Home</h3>
              </span>
            </a>
          </div>
          <div class='navDivItem'>
            <a href='#calendar'>
              <span>
                <h3 class='nav-header'>Calendar</h3>
              </span>
            </a>
          </div>
          <div class='navDivItem'>
            <a href='#info'>
              <span>
                <h3 class='nav-header'>Info</h3>
              </span>
            </a>
          </div>
          <div class='navDivItem'>
            <a href='#fambly'>
              <span>
                <h3 class='nav-header'>Fambly</h3>
              </span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBarView
