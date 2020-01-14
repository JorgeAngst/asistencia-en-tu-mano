import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper } from 'google-maps-react'
import service from '../service/roadAssistance-services';
import carLogo from '../images/map-marker-icon_34392.png'
import InfoWindowEx from './infoWindowEx';

export class SimpleMap extends Component {
  constructor(props){
    super(props)
    this.state={
      showingInfoWindow: false,
      activeMarker: {},
      pickupInfo: {},
      center: {
        lat: undefined,
        lng: undefined,
      },
      zoom: 14,
      markers:[{
        username:undefined,
        latitude: undefined,
        longitude: undefined,
      }]
    }
    this.service = new service()
  }
  
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(position => {
    // Create an object to match Google's Lat-Lng object format
      const center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      // console.log(this.props.pickups) 
      this.setState({center})
    })
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      pickupInfo: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  
  // Send the location of the brokendown car and the id of the pickup selected for the asistance
  sendPickUpInfo = () => {
    // const info = { this.state.pickupInfo.user.lat, this.state.pickupInfo.user.lng, this.state.pickupInfo.id}
    // this.service.postUserLocation(info)
    this.service.postUserLocation(this.state.pickupInfo.user.lat, this.state.pickupInfo.user.lng, this.state.pickupInfo.id)
    .then(res=>console.log(res))
    console.log("********************** Send pick up info", )
  }

  render() {
    const markers = this.props.pickups.map((pickups) => {
      return ({
        latitude: pickups.location.latitude,
        longitude: pickups.location.longitude,
        username: pickups.username,
        id: pickups._id
      })
    })
    // console.log(this.state.pickupInfo)

    return (
      <Map 
        style={{ height: '100vh', width: '100%' }}
        google={this.props.google}
        center={this.state.center}
        zoom={this.state.zoom}>
        <Marker
          name={'Your position'}
          position={this.state.center}
          icon={{
            url: carLogo,
            }}
        />
          {
            markers.length && markers.map((pickups,i) => {
              return <Marker
                      onClick={this.onMarkerClick}
                      key={i}
                      position={{lat: pickups.latitude, lng: pickups.longitude}}
                      name={pickups.username}
                      id={pickups.id}
                      user={this.state.center}             
                      icon="https://img.icons8.com/doodle/48/000000/crane.png"
                    />             
            })           
          }
        <InfoWindowEx      
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          >  
          <div className="infoWindowText">
            <h1>{this.state.pickupInfo.name} </h1>
            <button onClick={this.sendPickUpInfo}>Enviar</button>
          </div>
        </InfoWindowEx>
      </Map>
    );
  }
}


export default GoogleApiWrapper({
  apiKey: (process.env.REACT_APP_GOOGLE_MAPS_KEY)
})(SimpleMap)
  