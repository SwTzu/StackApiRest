// Import React
import React from 'react';

// Import Bootstrap
import { Nav, Navbar, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

// Import Custom CSS
import './App.css';

// Import from react-router-dom
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Import other React Component


import CreateCliente from './Components/clientes/create-cliente.component';
import ClienteList from './Components/clientes/cliente-list.component';
import EditCliente from './Components/clientes/edit-cliente.component';

import CreateRestaurante from './Components/restaurantes/create-restaurante.component';
import RestauranteList from './Components/restaurantes/restaurante-list.component';
import EditRestaurante from './Components/restaurantes/edit-restaurante.component';

import CreateAdmin from './Components/admin/create-admin.component';
import AdminList from './Components/admin/admin-list.component';
import EditAdmin from './Components/admin/edit-admin.component';

import CreateReserva from './Components/reservas/create-reserva.component';
import ReservaList from './Components/reservas/reserva-list.component';
import EditReserva from './Components/reservas/edit-reserva.component';

import CreateMesa from './Components/mesas/create-mesa.component';
import MesaList from './Components/mesas/mesa-list.component';
import EditMesa from './Components/mesas/edit-mesa.component';
// App Component
const App = () => {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <Navbar bg='dark' variant='dark'>
            <Container>
              <Navbar.Brand>
                <Link to={'/create-clientes'} className='nav-link'>
                  React App
                </Link>
              </Navbar.Brand>

              <Nav className='justify-content-end'>
                {/* <Nav>
                  <Link to={"/create-client"} 
                    className="nav-link">
                    Create Client
                  </Link>
                </Nav> */}

                <Nav>
                  <Link to={'/cliente-list'} className='nav-link'>
                    lista de clientes
                  </Link>
                </Nav>

                {/* <Nav>
                  <Link to={"/create-product"} 
                    className="nav-link">
                    Create Product
                  </Link>
                </Nav> */}
                <Nav>
                  <Link to={'/restaurante-list'} className='nav-link'>
                    lista de restaurantes
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/admin-list'} className='nav-link'>
                    lista de admin
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/reserva-list'} className='nav-link'>
                    lista de reserva
                  </Link>
                </Nav>
                <Nav>
                  <Link to={'/mesa-list'} className='nav-link'>
                    lista de mesa
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className='wrapper'>
                <Switch>
                  <Route exact path='/' component={ClienteList} />


                  <Route path='/create-clientes' component={CreateCliente} />
                  <Route path='/cliente-list' component={ClienteList} />
                  <Route path='/edit-cliente/:id' component={EditCliente} />

                  <Route path='/create-restaurantes' component={CreateRestaurante} />
                  <Route path='/restaurante-list' component={RestauranteList} />
                  <Route path='/edit-restaurante/:id' component={EditRestaurante} />

                  <Route path='/create-admin' component={CreateAdmin} />
                  <Route path='/admin-list' component={AdminList} />
                  <Route path='/edit-admin/:id' component={EditAdmin} />

                  <Route path='/create-reserva' component={CreateReserva} />
                  <Route path='/reserva-list' component={ReservaList} />
                  <Route path='/edit-reserva/:id' component={EditReserva} />

                  <Route path='/create-mesa' component={CreateMesa} />
                  <Route path='/mesa-list' component={MesaList} />
                  <Route path='/edit-mesa/:id' component={EditMesa} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
