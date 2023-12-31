import { Button, Form } from 'react-bootstrap'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { Context } from '../Context/Provider'

const Registro = () => {
  const { registro, users } = useContext(Context)
  const navigate = useNavigate()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== repassword) {
      alert("Contraseñas son distintas")
      return
    }

    const user = registro({
      name,
      email,
      lastname,
      password,
      id: Date.now(),
      profileImage: "./img/perfil.png"
    });
    if (user) {
      alert("Email ya registrado")
      return
    }

    alert("usuario registrado con exito")
    navigate("/productos")

  };

  return (
    <div>
      <div className='login'>
        <div className='container-login'>
          <div className='card-login-register'>
            <div className='title-login text-white'>
              <h3>Registrarse</h3>
              <hr />
            </div>
            <Form className="inputs-register"  onSubmit={handleSubmit}>
            <div className='name-validation text-white'>
                <div>
                  <p>Nombre</p>
                  <Form.Control type="text" onChange={(e) => { setName(e.target.value) }} placeholder="Ingrese Nombre" name="name" required />
                </div>
                <div>
                  <p className='text-white'>Apellido</p>
                  <Form.Control type="text" onChange={(e) => { setLastname(e.target.value) }} placeholder="Ingrese Apellido" name="lastName" required />
                </div>
              </div>
              <div className='email-password text-white'>
                <p>Email</p>
                <Form.Control type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Ingrese Email" name="email" required />
              </div>
              <div className='email-password text-white'>
                <p>Contraseña</p>
                <Form.Control type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Nueva contraseña" name="password" required />
              </div>
              <div className='email-password text-white'>
                <p>Repetir contraseña</p>
                <Form.Control type="password" onChange={(e) => { setRepassword(e.target.value) }} placeholder="Repetir Contraseña" name="repeatPassword" required />
              </div>
              
              <Button id="btn-register" type='submit' variant='primary'>Registrarse</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registro