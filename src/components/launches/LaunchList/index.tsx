import React, { useState, useEffect } from "react";

import { Launch } from "../../../types/Launch";
import LaunchItem from "../LaunchItem";
import DropDown from "../DropDown";
import { SortIcon } from "../../../assets/icon";
import "../launches.scss";

interface Props {
  launches: Launch[];
  ascending: boolean;
  handleSortClick: () => void;
  selectedYear: string;
  handleFilterClick: (year: string) => void;
}

const LaunchList: React.FC<Props> = ({
  launches,
  ascending,
  handleSortClick,
  selectedYear,
  handleFilterClick,
}: Props) => {
  const [filterYears, setFilterYears] = useState<string[]>([]);

  useEffect(() => {
    if (filterYears.length === 0) {
      populateYears();
    }
  }, [launches]);

  const populateYears = (): void => {
    setFilterYears([
      ...new Set(launches.map((launch: Launch) => launch.launch_year)),
    ]);
  };

  return (
    <div className="launch">
      <div className="launch__header">
        <DropDown
          filterYears={filterYears}
          selectedYear={selectedYear}
          handleFilterClick={handleFilterClick}
        />
        <button className="launch__button" onClick={() => handleSortClick()}>
          Sort {ascending ? "Descending" : "Ascending"}
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
