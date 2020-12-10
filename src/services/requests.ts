import { Launch } from "../types/Launch";

const baseUrl: string = "https://api.spacexdata.com/v3/";

export const getOrderedFilteredLaunches = (ascending: boolean, year: string): Promise<Launch[]> => {
    const data = ascending ? fetch(baseUrl + `launches?order=asc&launch_year=${year}`) : fetch(baseUrl + `launches?order=desc&launch_year=${year}`);
    return data
        .then(res => res.json())
        .catch(error => console.log(error));
}