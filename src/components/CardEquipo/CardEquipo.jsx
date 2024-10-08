import './CardEquipo.css'

const CardEquipo = ({ equipo }) => {
    return (
        <div className="card custom-width p-4 bg-custom-gray">
            <img src={equipo.url_img} className="card-img-top h-custom" alt={equipo.nombre} />
            <div className="card-body">
                <h5 className="card-title">{equipo.nombre}</h5>
                <a href="#" className="btn btn-primary">Detalles</a>
            </div>
        </div>
    )
}
export default CardEquipo