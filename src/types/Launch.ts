export interface Launch {
    flight_number: number;
    mission_name: string;
    launch_date_utc: Date;
    rocket: {
        rocket_name: string;
    };
};