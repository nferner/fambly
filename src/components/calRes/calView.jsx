import React from 'react'

class CalView extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div class='calViewWrap' id='calendar'>
        <iframe class='googleCal' src='https://calendar.google.com/calendar/b/2/embed?title=The%20Cottage%20Calendar&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=the.sniders.cottage%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FNew_York' />
      </div>
    )
  }
}

export default CalView
