import { Launch } from "../types/Launch";

const baseUrl: string = "https://api.spacexdata.com/v3/";

export const getLaunches = async (): Promise<Launch[]> => {
    return fetch(baseUrl + "launches/")
        .then(res => res.json())
        .catch(error => console.log(error));
}