import { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Button, Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'
// import logo from '../components/logo1.png'
import { Context } from '../Context/Provider'



const Nbar = () => {
    const { user, setUser, carrito, setCarrito, setPrecioAc, setArrayPrecios, setFavoritos, favoritos } = useContext(Context)
    const navigate = useNavigate()

    return (
        <div>
            <Navbar expand="lg" className='navbar fixed-top' >
                <Container >
                    <div className='d-flex justify-content-center align-items-center'>
                        <Navbar.Brand className='logo' style={{ backgroundImage: `url('./img/logo1.png')`, width: '70px' }}>
                            <NavLink to="/" style={{ textDecoration: 'none' }}></NavLink>
                        </Navbar.Brand>
                        <Navbar.Brand>
                            <NavLink to="/" className={"p-2 text-dark"} style={{ textDecoration: 'none' }}><b className='title-nav'>Películas y Documentales</b></NavLink>
                        </Navbar.Brand>
                    </div>
                    <div>
                        <Navbar.Toggle aria-controls="navbar-collapse" className='nav-pos bg-light text-light border border-primary' />
                        <Navbar.Collapse id="navbar-collapse">
                            <Nav className="me-auto">
                                {user ? (
                                    <>
                                        <NavLink to="/productos"  className={"m-2 p-2 text-light"} style={{ textDecoration: 'none' }}> <b>Películas</b></NavLink>
                                        <NavLink to="/perfil"  className={"m-2 p-2 text-light"} style={{ textDecoration: 'none' }}> <b>Perfíl</b> </NavLink>
                                        <NavLink to="/dashboard"  className={"m-2 p-2 text-light"} style={{ textDecoration: 'none' }}><b>Favoritos</b>❤️{favoritos.length} </NavLink>
                                        <NavLink to="/carrito"  className={"m-2 p-2 text-light"} style={{ textDecoration: 'none' }}>{" "}🛒{carrito.length}</NavLink>
                                        <Button onClick={() => { setUser(null); setCarrito([]); setPrecioAc(0); setFavoritos([]); setArrayPrecios([]); navigate("/") }}> <b>Cerrar sesión</b> </Button>
                                    </>) : (
                                    <>
                                        <NavLink to="/productos"  className={"m-2 p-2 text-light"} style={{ textDecoration: 'none' }}><b>Películas</b></NavLink>
                                        <NavLink to="/login"  className={"m-2 p-2 text-light"} style={{ textDecoration: 'none' }}> <b>Iniciar Sesion</b> </NavLink>
                                    </>)}


                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Container>
            </Navbar>
        </div >

    )
}

export default Nbar