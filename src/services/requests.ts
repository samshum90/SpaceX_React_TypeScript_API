import { Launch } from "../types/Launch";

const baseUrl: string = "https://api.spacexdata.com/v3/";

export const getLaunches = (): Promise<Launch[]> => {
    return fetch(baseUrl + "launches/")
        .then(res => res.json())
        .catch(error => console.log(error));
}

export const getOrderedLaunches = (ascending: boolean): Promise<Launch[]> => {
    const data = ascending ? fetch(baseUrl + "launches?order=asc") : fetch(baseUrl + "launches?order=desc")
    return data
        .then(res => res.json())
        .catch(error => console.log(error));
}