import React from "react";
import { Launch } from "../../types/Launch";

interface Props {
  launch: Launch;
}

const LaunchItem: React.FC<Props> = ({ launch }: Props) => {
  return (
    <li className="launch__list-item">
      <h2>#{launch.flight_number}</h2>
      <h2>{launch.mission_name}</h2>
      <span>{launch.launch_date_utc}</span>
      <span>{launch.rocket.rocket_name}</span>
    </li>
  );
};

export default LaunchItem;
