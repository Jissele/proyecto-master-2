
const Cardb = ({ image, name, direccion, country, gender, duracion, estreno, price, boton1, boton2, boton3 }) => {
  return (
    <div className="card">
      <img
        src={image}
        className="card-img-top card-img"
        alt={name}
        style={{ objectFit: 'fill', height: 'auto', width: '100%' }}
      />
      <div className="cont-desc">
        <div className="card-body-my">
          <h5 className="card-title textCard">{name}</h5>
          <p className="textCard">
            {new Intl.NumberFormat('es-CL', {
              style: 'currency',
              currency: 'CLP',
            }).format(price)}
          </p>
        </div>
        <ul className="list-group list-group-flush textCard">
          <li className="list-group-item">Año: {estreno}</li>
          <li className="list-group-item">Genero: {gender}</li>
          <li className="list-group-item">Duración: {duracion}</li>
        </ul>
        <div className="card-footer d-flex justify-content-center">
          {boton1}
          {boton2}
          {boton3}
        </div>
      </div>
    </div>
  );
};

export default Cardb;
