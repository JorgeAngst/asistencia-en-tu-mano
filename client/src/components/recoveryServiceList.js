import React, { Component } from 'react'
import RoadAssistance from '../service/roadAssistance-services'
import SimpleMap from './map'

class RecoveryServicesList extends Component {

  constructor(props) {
    super(props)
    this.state = { pickups: []}
    this.services = new RoadAssistance()
  }

  componentDidMount() {
    this.services.getAllRecoveryServices()
    .then(allRecoveryServices => this.setState({pickups: allRecoveryServices}))
  }
  render() {
    // console.log(this.state)
    return (
      <div style={{ height: '100vh', width: '100%' }}> 
          {/* {this.state.pickups.map((pickups, idx) => {
            return (<p key={idx}>{pickups.role}</p>)
          })}     */}
        <SimpleMap pickups={this.state.pickups}/> 
      </div>
    )
  }
}

export default RecoveryServicesList