import { useState } from "react";
import { Button } from "react-bootstrap";
import Cardb from "../components/Cardb";
import { Context } from "../Context/Provider";
import { useContext } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const Productos = () => {
    const { productos, sortProducts, setSearchValue, setProductos, user } =
        useContext(Context);
    const value = useContext(Context);
    const [filterProduct, setFilterProduct] = useState(productos);
    const añadirProducto = value.añadirProducto;
    const sumaAc = value.sumaAc;
    const setPrecioAc = value.setPrecioAc;
    const handleSortChange = (e) => {
        const sortValue = e.target.value;
        sortProducts(sortValue);
    };

    const filtrarProducto = (e) => {
        e.preventDefault();
        const query = e.target.value;
        let nuevaLista = [...filterProduct];
        let newLista = nuevaLista.filter((item) => {
            return (
                item.nombre.toLowerCase().indexOf(query.toLowerCase()) !== -1
            );
        });
        setProductos(newLista);
    };

    return (
        <>
            <div className="find-product">
                <form className="search" action="">
                    <Form.Select
                        aria-label="Default select example"
                        onChange={handleSortChange}
                    >
                        <option value="id"> Ordenar </option>
                        <option value="price-lowest">
                            Precio menor a mayor
                        </option>
                        <option value="price-highest">
                            Precio mayor a menor
                        </option>
                    </Form.Select>
                    <Form.Control
                        placeholder="Buscar"
                        onChange={filtrarProducto}
                    />
                </form>
            </div>
            <div className="menu">
                <div className="gallery">
                    <div className="galeria p-3 mt-5">
                        {productos.map((productos) => (
                            <div
                                key={productos.nombre}
                                className="card-pelicula"
                                style={{ width: "100%" }}
                            >
                                <Cardb
                                    image={productos.imagen}
                                    name={productos.nombre}
                                    estreno={productos.año}
                                    gender={productos.genero}
                                    duracion={productos.tiempo}
                                    price={productos.price}
                                    boton1={
                                        <Link
                                            to={
                                                user
                                                    ? `/producto/${productos.id}`
                                                    : "/login"
                                            }
                                        >
                                            <Button
                                                variant="primary"
                                                className="mx-2 bg-primary border border-0"
                                            >
                                                Detalle
                                            </Button>
                                        </Link>
                                    }
                                    
                                        
                                    
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Productos;
