import React from "react";

import { Launch } from "../../../types/Launch";

interface Props {
  launch: Launch;
}

const LaunchItem: React.FC<Props> = ({ launch }: Props) => {
  const moment = require("moment");
  return (
    <li className="launch__list-item">
      <h2 className="launch__list-item-number">#{launch.flight_number}</h2>
      <h2 className="launch__list-item-flight">{launch.mission_name}</h2>
      <div className="launch__list-item-end">
        <span className="launch__list-item-date">
          {moment(`${launch.launch_date_utc}`).format("Do MMM YYYY", true)}
        </span>
        <span className="launch__list-item-rocket">
          {launch.rocket.rocket_name}
        </span>
      </div>
    </li>
  );
};

export default LaunchItem;
