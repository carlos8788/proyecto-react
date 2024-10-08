import React, { useState, useEffect } from 'react';
import { Calendar } from 'primereact/calendar';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import useFetchData from '../hooks/useFetchData';
import 'primereact/resources/themes/saga-blue/theme.css';  
import 'primereact/resources/primereact.min.css';  
import 'primeicons/primeicons.css';  

const ResultadosPartidos = () => {
    const { data: partidos, loading, error } = useFetchData('http://localhost:8000/api/partidos');
    const [rangeDates, setRangeDates] = useState(null);  // Guardar el rango de fechas seleccionado
    const [filteredPartidos, setFilteredPartidos] = useState([]);
    const [minDate, setMinDate] = useState(null);  // Fecha mínima desde los datos de la API
    const [maxDate, setMaxDate] = useState(null);  // Fecha máxima desde los datos de la API

    // Filtrar partidos que se juegan dentro del rango de fechas
    useEffect(() => {
        if (rangeDates && rangeDates[0] && rangeDates[1] && partidos) {
            const [startDate, endDate] = rangeDates;
            const partidosFiltrados = partidos.filter((partido) => {
                const partidoFecha = new Date(partido.fecha);  // Convertir la fecha del partido a un objeto Date
                return partidoFecha >= startDate && partidoFecha <= endDate;
            });
            setFilteredPartidos(partidosFiltrados);
        } else {
            setFilteredPartidos([]);
        }
    }, [rangeDates, partidos]);

    // Obtener la fecha mínima y máxima de los datos de la API
    useEffect(() => {
        if (partidos && partidos.length > 0) {
            // Convertir las fechas a objetos Date
            const fechas = partidos.map((partido) => new Date(partido.fecha));

            // Calcular la fecha mínima (primer partido) y la fecha máxima (último partido)
            const minFecha = new Date(Math.min(...fechas));
            const maxFecha = new Date(Math.max(...fechas));

            // Actualizar el estado con las fechas límite
            setMinDate(minFecha);
            setMaxDate(maxFecha);
        }
    }, [partidos]);

    return (
        <div className="card">
            <h2>Resultados de los Partidos del Mundial</h2>

            <div style={{ marginBottom: '20px' }}>
                <h4>Seleccionar Rango de Fechas</h4>
                <Calendar 
                    value={rangeDates} 
                    onChange={(e) => setRangeDates(e.value)} 
                    selectionMode="range"  // Habilitar selección de rango
                    dateFormat="yy-mm-dd" 
                    showIcon 
                    readOnlyInput
                    minDate={minDate}  // Fecha mínima desde los datos de la API
                    maxDate={maxDate}  // Fecha máxima desde los datos de la API
                    viewDate={minDate}
                />
            </div>

            {loading && <p>Cargando partidos...</p>}
            {error && <p>Error al cargar los partidos: {error.message}</p>}

            {!loading && !error && filteredPartidos.length > 0 && (
                <DataTable value={filteredPartidos}>
                    <Column field="equipo_local.nombre" header="Equipo Local" body={renderLocalTeam}></Column>
                    <Column field="goles_local" header="Goles Local"></Column>
                    <Column field="goles_visitante" header="Goles Visitante"></Column>
                    <Column field="equipo_visitante.nombre" header="Equipo Visitante" body={renderVisitanteTeam}></Column>
                    <Column field="estadio.nombre" header="Estadio"></Column>
                    <Column field="fase" header="Fase"></Column>
                </DataTable>
            )}

            {!loading && !error && filteredPartidos.length === 0 && (
                <p>No se encontraron partidos en el rango de fechas seleccionado.</p>
            )}
        </div>
    );
};

// Renderiza el equipo local con su bandera
const renderLocalTeam = (rowData) => {
    return (
        <div>
            <img src={rowData.equipo_local.url_img} alt={rowData.equipo_local.nombre} style={{ width: '30px', marginRight: '10px' }} />
            {rowData.equipo_local.nombre}
        </div>
    );
};

// Renderiza el equipo visitante con su bandera
const renderVisitanteTeam = (rowData) => {
    return (
        <div>
            <img src={rowData.equipo_visitante.url_img} alt={rowData.equipo_visitante.nombre} style={{ width: '30px', marginRight: '10px' }} />
            {rowData.equipo_visitante.nombre}
        </div>
    );
};

export default ResultadosPartidos;
