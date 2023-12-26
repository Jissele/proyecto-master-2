/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";

// eslint-disable-next-line react/prop-types, no-unused-vars
const CartItem = ({
    id,
    name,
    // eslint-disable-next-line no-unused-vars
    price,
    img,
    count,
    result,
    eliminarProducto,
    añadirProducto,
    setPrecioAc,
    sumaAc,
}) => {
    return (
        
        <div key={id} className="carrito-card">
            <div className="carrito-b1">
                <img className="carrito-img" src={img} alt="" /> <b className="textCart">{name}</b>
            </div>
            <div className="carrito-b2">
                <b className="text-success">${result}</b>{" "}
                <Button
                    onClick={() => {
                        eliminarProducto(id);
                    }}
                    variant="primary"
                    className="mx-2 bg-danger border border-0"
                >
                    -
                </Button>
                <b>{count}</b>
                <Button
                    onClick={() => {
                        añadirProducto(id);
                        setPrecioAc(sumaAc(id));
                    }}
                    variant="primary"
                    className="mx-2 bg-primary border border-0"
                >
                    +
                </Button>
            </div>
        </div>
    );
};

export default CartItem;
