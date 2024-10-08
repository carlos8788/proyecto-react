const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = response.json();
        return data
    } catch (error) {
        throw new Error(error.message ? error.message : 'Falló la conexión de la api')
    }
}

export default fetchData;