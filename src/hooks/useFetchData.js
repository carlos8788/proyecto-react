import { useEffect, useState } from "react"
import fetchData from "../api/fetchData"


const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await fetchData(url)
                setData(result)
                setLoading(false)
            } catch (error) {
                setError(error.message)
                setLoading(false)
            }
        }
        getData()
    }, [url])

    return { data, loading, error }
}

export default useFetchData