import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Cardb from './Cardb';

const PublicacionesItem = ({ product, onDelete }) => {
  return (
    <div key={product.id} className="card-g" style={{ width: '18rem' }}>
    <Cardb
      image={product.imagen}
      name={product.nombre}
      price={product.price}
      estreno={product.año}
      gender={product.genero}
      duracion={product.tiempo}
      boton2={
        <Link to={`/publicaciones/${product.id}`}>
          <Button variant="primary" className='mx-2 bg-primary border border-0'>Editar</Button>
        </Link>}
      boton3={<Button onClick={() => onDelete(product.id)} className='mx-2 bg-danger border border-0'>Eliminar</Button>}
    />
  </div>
);
};

export default PublicacionesItem