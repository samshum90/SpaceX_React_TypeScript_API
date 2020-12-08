import React from "react";

import { Launch } from "../../types/Launch";
import LaunchItem from "./LaunchItem";
import { SortIcon } from "../../assets/icon";
import "./launches.scss";

interface Props {
  launches: Launch[];
}

const LaunchList: React.FC<Props> = ({ launches }: Props) => {
  return (
    <div className="launch">
      <div className="launch__header">
        <button className="launch__button">
          Sort Descending
          <img className="launch__button-icon" src={SortIcon} alt="Sort Icon" />
        </button>
      </div>
      <ul className="launch__list">
        {launches.map((launch: Launch, index: number) => (
          <LaunchItem key={index} launch={launch} />
        ))}
      </ul>
    </div>
  );
};

export default LaunchList;
