import React, { useState } from "react";
import OutsideClick from "./OutsideClick";

import { SelectIcon } from "../../../assets/icon";

interface Props {
  filterYears: string[];
  selectedYear: string;
  handleFilterClick: (year: string) => void;
}

const DropDown: React.FC<Props> = ({
  filterYears,
  selectedYear,
  handleFilterClick,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleYearClick = (year: string): void => {
    handleFilterClick(year);
    setIsOpen(false);
  };

  return (
    <OutsideClick setIsOpen={setIsOpen}>
      <div className="dropdown">
        <button className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
          <div className="dropdown__header-title">
            {selectedYear ? `Filtered by ${selectedYear}` : "Filter by Year"}
          </div>
          <img
            className="dropdown__header-icon"
            src={SelectIcon}
            alt="Filter Icon"
          />
        </button>
        {isOpen && (
          <ul className="dropdown-list">
            {filterYears.map((year) => (
              <li
                className="dropdown-list-item"
                key={year}
                onClick={() => handleYearClick(year)}
              >
                {year}
              </li>
            ))}
          </ul>
        )}
      </div>
    </OutsideClick>
  );
};

export default DropDown;
