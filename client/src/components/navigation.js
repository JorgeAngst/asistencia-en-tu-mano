import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import AuthServices from '../service/auth-services'
import Logo from '../images/Asistencia en tu mano.png'


class navigation extends Component {

  constructor(props) {
    super(props)
    this.service = new AuthServices()
  }


  logout = () => {
    console.log("hola")
      this.service.logout()
      .then(x => {
        console.log("contigo pipo")
        this.props.setTheUser(null)})
  }

  render() {
    console.log(this.props)
    if (this.props.userInSession) {
      return (
        <Navbar expand="md" bg="dark" variant="dark" className="justify-content-end navigation">
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Item className="nav-links" >
                <Nav.Link as="div">
                  <img src={Logo} alt="logo" className="logoNav" />
                        </Nav.Link>
              </Nav.Item>
              <section>
                <Nav.Item>
                  <Nav.Link as="div">
                    ¡Hola {this.props.userInSession.username}!
                          </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as="div">
                    <Link to="/profile">Perfil</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as="div">
                    <Link to="/">Inicio</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as="div">
                    <Link to="/map">Mapa de asistencia</Link>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as="div">
                    <div onClick={this.logout}>Cerrar sesión</div>
                  </Nav.Link>
                </Nav.Item>
              </section>
            </Nav>
          </Navbar.Collapse>
        </Navbar >
      )
    } else {
      return (
        <Navbar expand="md" bg="dark" variant="dark" className="justify-content-end navigation">
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Item className="nav-links" >
                <Nav.Link as="div">
                  <img src={Logo} alt="logo" className="logoNav" />
                </Nav.Link>
              </Nav.Item>
              <section>
              <Nav.Item>
                <Nav.Link as="div">
                  ¡Hola invitado!
                        </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as="div">
                  <Link to="/">Inicio</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as="div">
                  <Link to="/map">Mapa de asistencia</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as="div">
                  <Link to="/login">Iniciar sesión</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link as="div">
                  <Link to="/signup">Registrarse</Link>
                </Nav.Link>
              </Nav.Item>
              </section>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )
    }
  }
}




export default navigation