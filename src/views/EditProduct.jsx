import { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "../styles/login.css";
import { Context } from "../Context/Provider";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditProduct = () => {
    const params = useParams();
    const navigate = useNavigate();
    const { productos, user, setProductos } = useContext(Context);
    const [nombre, setNombre] = useState("");
    const [price, setPrice] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");
    const [gender, setGender] = useState("");
    const [estreno, setEstreno] = useState("");
    const [tiempo, setTiempo] = useState("");
    const nId = Number(params.id);
    const getProductoById = (id) =>
        productos.find((producto) => producto.id === id);
    const newProducto = getProductoById(nId);
    const precio = Number(price);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updateProduct = {
            id: newProducto.id,
            nombre: nombre,
            descripcion: descripcion,
            imagen: imagen,
            price: precio,
            liked: false,
            userid: user.id,
            año: estreno,
            genero: gender,
            tiempo: tiempo,
        };
        const filtProducts = productos.filter(
            (item) => item.id !== newProducto.id
        );
        setProductos([...filtProducts, updateProduct]);
        alert("Producto actualizado con exito");
        navigate("/publicaciones");
    };
    return (
        <div>
            <div className='login'>
                <div className='container-login'>
                    <div className='card-login text-white'>
                        <div className='title-login'>
                            <h3>Editar Película</h3>
                            <hr />
                        </div>
                        <Form className="inputs-register p-3" onSubmit={handleSubmit} >
                            <div className='email-password'>
                                <p>Nombre Película</p>
                                <Form.Control className='text-capitalize' type="text" onChange={(e) => { setNombre(e.target.value) }} placeholder="Nombre" name="Nombre" required />
                            </div>                           
                            <div className='name-validation'>
                                <div>
                                    <p>Precio</p>
                                    <Form.Control type="number"  onChange={(e) => { setPrice(e.target.value) }} placeholder="Precio" name="price" required />
                                </div>
                                <div>
                                    <p>Descripción</p>
                                    <Form.Control type="text" onChange={(e) => { setDescripcion(e.target.value) }} placeholder="Descripcion" name="name" required />
                                </div>
                                <div>
                                    <p>Imagen</p>
                                    <Form.Control type="text" onChange={(e) => { setImagen(e.target.value) }} placeholder='Link Imagen' name="lastName" required />
                                </div>
                                <div>
                                    <p>Año</p>
                                    <Form.Control type="number" onChange={(e) => { setEstreno(e.target.value) }} placeholder='Año estreno'  name="Año" required />
                                </div>
                                <div>
                                    <p>Genero</p>
                                    <Form.Control className='text-capitalize' type="text" onChange={(e) => { setGender(e.target.value) }} placeholder='Genero' name="genero" required />
                                </div>
                                <div>
                                    <p>Duración</p>
                                    <Form.Control type="text" onChange={(e) => { setTiempo(e.target.value) }} placeholder='Minutos' name="duracion" required />
                                </div>
                                
                            </div>
                            <Button id="btn-register" type='submit' variant='primary'>Publicar</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
