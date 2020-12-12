import React from "react";

import { Launch } from "../../../types/Launch";
import LaunchItem from "../LaunchItem";
import "../launches.scss";

interface Props {
  launches: Launch[];
}

const LaunchList: React.FC<Props> = ({ launches }: Props) => {
  if (launches.length === 0) {
    return <p className="launch__loading">Loading Launches...</p>;
  }
  return (
    <ul className="launch__list">
      {launches.map((launch: Launch, index: number) => (
        <LaunchItem key={index} launch={launch} />
      ))}
    </ul>
  );
};

export default LaunchList;
