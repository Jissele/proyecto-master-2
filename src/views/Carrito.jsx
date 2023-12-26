import { useContext } from 'react';
import { Context } from '../Context/Provider';
import { Button } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import '../styles/carrito.css';

const Carrito = () => {
    const { carrito, precioAc, setPrecioAc, añadirProducto, eliminarProducto, sumaAc } = useContext(Context);

    const newCarrito = carrito.slice().sort((a, b) => a.id - b.id);

    let productoList = [];
    const newLista = () => {
        const productoMap = new Map();
    
        newCarrito.forEach((producto) => {
            const count = productoMap.get(producto.id) || 0;
            productoMap.set(producto.id, count + 1);
        });
    
        productoList = Array.from(productoMap.entries()).map(([id, count]) => {
            const product = newCarrito.find((p) => p.id === id);
    
            return {
                id: product.id,
                name: product.nombre,
                price: product.price,
                img: product.imagen,
                count: count,
                result: (count * product.price).toLocaleString(),
            };
        });
    };

    newLista();
    const handlePagar = () =>{
        alert(`¡Gracias por tu compra! Estamos trabajando en el envío de tus productos, pronto podrás disfrutarlos`);
    }
    return (
        <div className="carrito-cont">
            <div className="cont">
                {productoList.length > 0 && (
                    <h4 className="detailsText text-center fs-1">Detalles de pedidos</h4>
                )}
                <h4 className="text-center fs-1">
                    {productoList.length === 0 ? 'No hay películas en carro' : ''}
                </h4>
                {productoList.map((producto) => (
                    <CartItem
                        key={producto.id}
                        id={producto.id}
                        name={producto.name}
                        price={producto.price}
                        img={producto.img}
                        count={producto.count}
                        result={producto.result}
                        eliminarProducto={eliminarProducto}
                        añadirProducto={añadirProducto}
                        setPrecioAc={setPrecioAc}
                        sumaAc={sumaAc}
                    />
                ))}
                {productoList.length > 0 && (
                    <h3 className="m-3">
                        <b>
                            Total: {new Intl.NumberFormat('es-CL', {
                                style: 'currency',
                                currency: 'CLP',
                            }).format(precioAc)}{' '}
                            <Button variant="success" className="mx-2 bg-success border border-0" onClick={handlePagar}>
                                <b>Finalizar Compra</b>
                            </Button>
                        </b>
                    </h3>
                )}
            </div>
        </div>
    );
};

export default Carrito;
