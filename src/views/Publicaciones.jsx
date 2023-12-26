import  { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Context } from '../Context/Provider';
import PublicacionesItem from '../components/PublicacionesItem';
import '../styles/dashboard.css';

const Publicaciones = () => {
  const { productos, user, deleteProducto } = useContext(Context);
  const productosFilt = productos.filter(producto => producto.userid === user.id);

  return (
    <section className='dashboard pt-5'> 
      <div>
        <h1>Mis publicaciones</h1>
        <Link to="/agregarp">
          <Button to="/agregarp">Nueva publicación <img width="30" height="30" src="https://img.icons8.com/fluency/48/add-to-favorites.png" alt="add-to-favorites"/> </Button>
        </Link>
      </div>
      
      
        <div className='publish'>
          {productosFilt.map(producto => (
            <PublicacionesItem key={producto.id} product={producto} onDelete={deleteProducto} />
          ))}
        </div>
      
      
    </section>
  );
};

export default Publicaciones;

