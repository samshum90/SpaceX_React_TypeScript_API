import React from "react";
import { Launch } from "../../types/Launch";
import LaunchItem from "./LaunchItem";

export interface Props {
  launches: Launch[];
}

const LaunchList: React.FC<Props> = ({ launches }) => {
  return (
    <ul>
      <LaunchItem />
    </ul>
  );
};

export default LaunchList;
