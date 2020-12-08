import React from "react";
import { Launch } from "../../types/Launch";

interface Props {
  launch: Launch;
}

const LaunchItem: React.FC<Props> = ({ launch }: Props) => {
  return (
    <li className="launch__list-item">
      <h2 className="launch__list-item-number">#{launch.flight_number}</h2>
      <h2 className="launch__list-item-name">{launch.mission_name}</h2>
      <div className="launch__list-item-end">
        <span>{launch.launch_date_utc}</span>
        <span>{launch.rocket.rocket_name}</span>
      </div>
    </li>
  );
};

export default LaunchItem;
