import { useContext } from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import "../styles/login.css";
import { Context } from "../Context/Provider";
import { useNavigate } from "react-router-dom";

const AddProducto = () => {
    const navigate = useNavigate();
    const { user, addProduct } = useContext(Context);
    const [nombre, setNombre] = useState("");
    const [price, setPrice] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [imagen, setImagen] = useState("");
    const [gender, setGender] = useState("");
    const [estreno, setEstreno] = useState("");
    const [tiempo, setTiempo] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const precio = Number(price);
        addProduct(
            user.id,
            nombre,
            descripcion,
            imagen,
            precio,
            estreno,
            gender,
            tiempo
        );
        alert("Publicacion agregada con exito");
        navigate("/publicaciones");
    };

    return (
        <div>
            <div className="login text-white">
                <div className="container-login">
                    <div className="card-login">
                        <div className="title-login">
                            <h3>Añadir Película</h3>
                            <hr />
                        </div>
                        <Form
                            className="inputs-register p-3"
                            onSubmit={handleSubmit}
                        >
                            <div className="email-password">
                                <p>Nombre Película</p>
                                <Form.Control
                                    className="text-capitalize"
                                    type="text"
                                    onChange={(e) => {
                                        setNombre(e.target.value);
                                    }}
                                    placeholder="Nombre"
                                    name="Nombre"
                                    required
                                />
                            </div>
                            <div className="name-validation">
                                <div>
                                    <p>Precio</p>
                                    <Form.Control
                                        type="number"
                                        onChange={(e) => {
                                            setPrice(e.target.value);
                                        }}
                                        placeholder="Precio"
                                        name="price"
                                        required
                                    />
                                </div>
                                <div>
                                    <p>Descripción</p>
                                    <Form.Control
                                        type="text"
                                        onChange={(e) => {
                                            setDescripcion(e.target.value);
                                        }}
                                        placeholder="Descripcion"
                                        name="name"
                                        required
                                    />
                                </div>
                                <div>
                                    <p>Imagen</p>
                                    <Form.Control
                                        type="text"
                                        onChange={(e) => {
                                            setImagen(e.target.value);
                                        }}
                                        placeholder="Link Imagen"
                                        name="lastName"
                                        required
                                    />
                                </div>
                                <div>
                                    <p>Año</p>
                                    <Form.Control
                                        type="number"
                                        onChange={(e) => {
                                            setEstreno(e.target.value);
                                        }}
                                        placeholder="Año estreno"
                                        name="Año"
                                        required
                                    />
                                </div>
                                <div>
                                    <p>Genero</p>
                                    <Form.Control
                                        className="text-capitalize"
                                        type="text"
                                        onChange={(e) => {
                                            setGender(e.target.value);
                                        }}
                                        placeholder="Genero"
                                        name="genero"
                                        required
                                    />
                                </div>
                                <div>
                                    <p>Duración</p>
                                    <Form.Control
                                        type="text"
                                        onChange={(e) => {
                                            setTiempo(e.target.value);
                                        }}
                                        placeholder="Minutos"
                                        name="duracion"
                                        required
                                    />
                                </div>
                            </div>
                            <Button
                                id="btn-register"
                                type="submit"
                                variant="primary"
                            >
                                Publicar
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProducto;
