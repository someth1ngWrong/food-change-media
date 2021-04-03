import { GoogleApiWrapper, Map } from 'google-maps-react'
import React from 'react'

const A_Map = ({ google }) => {
  return (
    <Map
      google={google}
      zoom={14}
      style={{
        width: "100%",
        height: "400px",
        maxHeight: "400px"
      }}
      initialCenter={
        {
          lat: -1.2884,
          lng: 36.8233
        }
      }
    />
  )
}

export default GoogleApiWrapper({ apiKey: '' })(A_Map)
