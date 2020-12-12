import { Launch } from "../types/Launch";

const baseUrl: string = "https://api.spacexdata.com/v3/";

// export const getLaunches = async () => {
//     try {
//         const response: Response = await fetch(
//             baseUrl + "launches/",
//             { headers: { 'Content-Type': 'application/json' }, method: "GET" });

//         if (response.status === 200) {
//             return await response.json();
//         } else if (response.status === 404) {
//             console.log('The server could not find this page.');
//         } else {
//             console.log('The server did not respond the data we wanted. We apologize for the inconvenience.');
//         }
//     } catch (cause) {
//         console.log('We were unable not retrieve any launches due to connection problems. Please check your internet connection.');
//     }
// };

export const getLaunches = async (): Promise<Launch[]> => {
    return fetch(baseUrl + "launches/")
        .then(res => res.json())
        .catch(error => console.log(error));
}

// export const getOrderedLaunches = (ascending: boolean): Promise<Launch[]> => {
//     const data = ascending ? fetch(baseUrl + "launches?order=asc") : fetch(baseUrl + "launches?order=desc");
//     return data
//         .then(res => res.json())
//         .catch(error => console.log(error));
// }

// export const getOrderedFilteredLaunches = (ascending: boolean, year: string): Promise<Launch[]> => {
//     const data = ascending ? fetch(baseUrl + `launches?order=asc&launch_year=${year}`) : fetch(baseUrl + `launches?order=desc&launch_year=${year}`);
//     return data
//         .then(res => res.json())
//         .catch(error => console.log(error));
// }
