import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Map from './components/Map'
import Places from './components/Places'

class App extends Component {
  render() {

      const location = {
          lat: 40.730610,
          lng: -73.935242
      }

      const markers = [
        {
            location:{
              lat: 40.730610,
              lng: -73.935242
            }
        },
        {
            location:{
              lat: 4.624335,
              lng:  -74.063644
            }
        }
      ]

      return (
        <div>
          this is the react app
          <div style={{with:300, height:600}}>
             <Map
                markers = { markers }
                center={{ lat: 40.7128, lng: -73.935242 }}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />} />
          </div>
            <Places />
        </div>
        )
  }
}


ReactDOM.render(<App />, document.getElementById('app'))
