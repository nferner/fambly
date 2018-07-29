import React from 'react'

class InfoItem extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div class='infoItemWrap'>
        <img />
        <h3>Title</h3>
        <p>Interchangeable description</p>
        <button>More</button>
      </div>
    )
  }
}
export default InfoItem
