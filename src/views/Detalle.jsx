import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../Context/Provider";
import { Button } from "react-bootstrap";

import "../styles/detalle.css";

const Detalle = () => {
    const params = useParams();
    const { productos, favoritos, user } = useContext(Context);
    const getProductoById = (id) =>
        productos.find((producto) => producto.id === id);
    const nId = Number(params.id);
    const newProducto = getProductoById(nId);
    const value = useContext(Context);
    const añadirProducto = value.añadirProducto;
    const sumaAc = value.sumaAc;
    const setPrecioAc = value.setPrecioAc;
    const addFavoritos = value.addFavoritos;
    if (!newProducto) {
        return <div>No hay películas encontradas</div>;
    }

    return (
        <div className="containerDet d-flex justify-content-center p-5">
            <div className="card mb-3" style={{ maxWidth: "700px" }}>
                <div className="row g-0">
                    <div className="  col-lg-6">
                        <img
                            src={newProducto.imagen}
                            className="img-fluid"
                            alt={newProducto.nombre}
                            style={{ width: "100%", height: "100%", }}
                        />
                    </div>
                    <div className="col-md-6">
                        <div className="card-body">
                            <h3 className="card-title text-capitalize textCard">
                                {newProducto.nombre}
                            </h3>
                            <p className="card-text ">
                                {newProducto.descripcion}
                            </p>
                            <ul className="list-group list-group-flush textCard">
                                <li className="list-group-item">
                                    <p className="text-capitalize">
                                    País: {newProducto.country}
                                        {/* Genero: {newProducto.genero} */}
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="text-capitalize">
                                    Dirección: {newProducto.direccion}
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="text-capitalize">
                                        Duración: {newProducto.tiempo}
                                    </p>
                                </li>
                                <li className="list-group-item">
                                    <p className="text-capitalize">
                                        Genero: {newProducto.genero}
                                    </p>
                                </li>
                            </ul>
                            <h4 className="price textCard">
                                {new Intl.NumberFormat("es-CL", {
                                    style: "currency",
                                    currency: "CLP",
                                }).format(newProducto.price)}
                            </h4>
                            <div>
                                <Button
                                    onClick={() => {
                                        añadirProducto(newProducto.id);
                                        setPrecioAc(sumaAc(newProducto.id));
                                    }}
                                    variant="primary"
                                    className="btn-danger"
                                >
                                    Añadir🛒
                                </Button>
                                <Button
                                    className="bg-warning ms-3"
                                    onClick={() => {
                                        addFavoritos(newProducto);
                                        console.log(favoritos);
                                    }}
                                >
                                    Favoritos❤️
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Detalle;

/* <Button  onClick={() => { añadirProducto(newProducto.id); setPrecioAc(sumaAc(newProducto.id)) }} variant="primary" className="btn-danger">Añadir🛒</Button>
<Button  className='bg-warning ms-3' onClick={() => {addFavoritos(newProducto) ; console.log(favoritos)}}>Favoritos❤️</Button> */
