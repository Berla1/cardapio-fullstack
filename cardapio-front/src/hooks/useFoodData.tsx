import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/FoodData"
import { useQuery } from "react-query"

const API_URL = "http://localhost:8080"

const fechData = async (): AxiosPromise<FoodData[]> => {
    const response = axios.get(API_URL + "/food")
    return response
}

const useFoodData = () => {
    const query = useQuery({
        queryFn: fechData,
        queryKey: ['food-data'],
        retry: 2
    })

    return{
        ...query,
        data: query.data?.data
    }
}

export default useFoodData