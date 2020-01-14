import React, { Component } from 'react'
import Services from '../service/roadAssistance-services'

class Profile extends Component {
  constructor() {
    super()
    this.state={services: []}
    this.services = new Services()
  }

  componentDidMount() {
    this.services.getServiceInfo()
      .then(info => this.setState({services: info}))
  }

  render() {
    const serv = this.state.services.map((services) => {
      return (
        <div>
          <h2>Servicio de Asistencia</h2>
          <hr />
          <ul>
          <li>Matrícula: {services.userId.plateNumber}</li>
          <li>Marca: {services.userId.brand}</li>
          <li>Modelo: {services.userId.model}</li>
          <li>Nombre Grúa: {services.pickupId.username}</li>
          <li>Teléfono: {services.pickupId.phoneNumber}</li>
          <li>Población:{services.pickupId.location.city}</li>
          </ul>
        </div>
      )
    })
    
    return (
      <div className="container">
        <h1>{this.props.loggedInUser.username}</h1>
        {serv} 
      </div>
    )
  }
}
export default Profile