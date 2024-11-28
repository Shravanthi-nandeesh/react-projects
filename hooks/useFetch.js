import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setIsLoading(true);

        try {
            const response = await axios.request("https://www.freetestapi.com/api/v1/animals");
            console.log(response,"response")
            setData(response.data);
            setIsLoading(false);
        } catch (error) {
            setError(true);
            console.error("Error occured while getting data.");

        } finally {
            setIsLoading(false);

        }
    }
    useEffect(() => {
        fetchData();
    }, [])

    const refetch = () => {
        setIsLoading(true);
        fetchData();
    }
    return {data,isLoading,error,refetch};
}
export default useFetch;