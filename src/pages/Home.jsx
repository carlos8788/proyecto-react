import CardEquipo from "../components/CardEquipo/CardEquipo"
import useFetchData from "../hooks/useFetchData"

const Home = () => {

    const { data, loading, error } = useFetchData('http://localhost:8000/api/equipos')

    if (error) {
        return (
            <h2 className="text-danger">Ocurrió un error</h2>
        )
    }

    if (loading) {
        return (
            <h2>Cargando...</h2>
        )
    }

    return (
        <main>
            <h1>Home</h1>
            <section className="d-flex flex-wrap gap-4 justify-content-center">
                {data.map(equipo => <CardEquipo key={equipo.id} equipo={equipo} />)}

            </section>
        </main>
    )
}
export default Home