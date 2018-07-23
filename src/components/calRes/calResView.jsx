import React from 'react'
import CalView from './calView.jsx'
import ResView from './resView.jsx'

class CalResView extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div class='calResViewWrap'>
        <CalView />
        <ResView />
      </div>
    )
  }
}

export default CalResView
