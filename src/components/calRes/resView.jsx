import React from 'react'

class ResView extends React.Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div class='resViewWrap'>
        <div class='reserveDiv'>
          <label for='start'>Start</label>
          <input type='date' id='start' name='trip' />
        </div>
        <div class='reserveDiv'>
          <label for='end'>End</label>
          <input type='date' id='end' name='trip' />
        </div>
        <div class='reserveDiv'>
          <label for='guests'>Guests</label>
          <select id='guests' name='guests'>
            <option value='1-3'>1-3</option>
            <option value='4-6'>4-6</option>
            <option value='6+'>6+</option>
          </select>
        </div>
        <div class='reserveDiv'>
          <label for='pets'>Pets</label>
          <div id='pets'>
            <input type='radio' id='yes' name='trip' />
            <label for='yes'>Yes</label>
            <input type='radio' id='no' name='trip' checked />
            <label for='no'>No</label>
          </div>
        </div>
        <div class='reserveDiv'>
          <label for='notes'>Additional Information</label>
          <textarea type='text' id='notes' name='trip' rows='4' cols='20' />
        </div>
        <div class='reserveDiv'>
          <button type='submit' onclick='sendEmail()' id='submit'>Request</button>
        </div>
      </div>
    )
  }
}

export default ResView
