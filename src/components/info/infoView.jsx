import React from 'react'
import InfoItem from './infoItem.jsx'

class InfoView extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div class='infoViewWrap' id='info'>
        <InfoItem />
        <InfoItem />
        <InfoItem />
      </div>
    )
  }
}

export default InfoView
