import { useContext } from 'react'
import { Context } from '../Context/Provider'
import "../styles/perfil.css"
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";


const Perfil = () => {
    const { user, users, setUsers, setUser } = useContext(Context)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [lastname, setLastname] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        if (password !== repassword) {
            alert("Contraseñas no coinciden")
            return
        }
        const updateUser = {
            id: user.id,
            name: name,
            lastname: lastname,
            email: email,
            password: password,
            profileImage: user.profileImage
        }
        const usersFilt = users.filter(item => item.id !== user.id)
        setUsers([...usersFilt, updateUser])
        setUser(updateUser)
        alert("Datos actualizados con exito")
        navigate("/productos")


    }

    return (
        <section className='p-5 mt-3'>
                <h2 className="text-center pt-3">Mis Datos<img width="30" height="30" src="https://img.icons8.com/plasticine/100/employee-card.png" alt="employee-card"/></h2>
            <div className="d-flex justify-content-center flex-column align-content-center text-center">
                <p className="textCard">{user.name} {user.lastname}</p>
                <p className="textCard">{user.email}</p>
                <Link to="/publicaciones">
                    <button type="btn" className="btn btn-warning">Mis Publicaciones <img width="30" height="30" src="https://img.icons8.com/cotton/64/streaming-movies.png" alt="streaming-movies"/></button>
                </Link>
            </div>
        <div className="perfil">
            <div className="card-perfil bg-body-secondary">
                <div
                    className="perfil-img"
                    style={{ backgroundImage: `url('./img/perfil.png') ` }}
                    ></div>
                <Form onSubmit={handleSubmit}>
                    <h3>Editar Perfíl</h3>
                    <div className="perf-desc">
                        <div className="perf-name">
                            <span>Nombre:</span>
                            <span>Apellido :</span>
                            <span>Email :</span>
                            <span>Contraseña :</span>
                            <span>Repetir Contraseña :</span>
                        </div>
                        <div className="perf-forms">
                            <Form.Control
                                className="input"
                                type="text"
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                placeholder={user.name}
                                name="name"
                                required
                            />
                            <Form.Control
                                className="input"
                                type="text"
                                onChange={(e) => {
                                    setLastname(e.target.value);
                                }}
                                placeholder={user.lastname}
                                name="lastname"
                                required
                            />
                            <Form.Control
                                className="input"
                                type="email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder={user.email}
                                name="email"
                                required
                            />
                            <Form.Control
                                className="input"
                                type="password"
                                onChange={(e) => {
                                    setRepassword(e.target.value);
                                }}
                                name="rppassword"
                                required
                            />
                            <Form.Control
                                className="input"
                                type="password"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                name="password"
                                required
                            />
                        </div>
                    </div>
                    <div className="button">
                        <Button
                            type="submit"
                            className="btnPerfil  bg-primary"
                            onSubmit={console.log(users)}
                        >
                            Editar
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
        </section>
    )
}

export default Perfil