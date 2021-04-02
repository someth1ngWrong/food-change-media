import React from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = ({ google }) => {
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

export default GoogleApiWrapper({ apiKey: '' })(MapContainer)
