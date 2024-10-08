import useFetchData from "../hooks/useFetchData"
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';

const Resultados = () => {
    const { data, loading, error } = useFetchData('http://localhost:8000/api/partidos');

    return (
        <div className="card w-50 mx-auto my-5">
            <h2>Resultados de los Partidos</h2>

            {loading && (
                <div className="spinner">
                    <ProgressSpinner />
                    <p>Cargando resultados...</p>
                </div>
            )}

            {error && (
                <Message severity="error" text={`Error al cargar los resultados: ${error.message}`} />
            )}

            {!loading && !error && data && (
                <DataTable value={data} resizableColumns columnResizeMode="fit" className="p-datatable-striped">
                    <Column field="id" header="#" sortable></Column>
                    <Column field="goles_local" header="Goles Local" sortable></Column>
                    <Column field="equipo_local.nombre" header="Equipo Local" sortable></Column>
                    <Column field="goles_visitante" header="Goles Visitante" sortable></Column>
                    <Column field="equipo_visitante.nombre" header="Equipo Visitante" sortable></Column>
                </DataTable>
            )}
        </div>
    );
};

export default Resultados;