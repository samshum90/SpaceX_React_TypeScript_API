import React, { useState } from "react";

import { SelectIcon } from "../../../assets/icon";

interface Props {
  filterYears: string[];
  selectedYear: string;
  setSelectedYear: (year: string) => void;
}

const DropDown: React.FC<Props> = ({
  filterYears,
  selectedYear,
  setSelectedYear,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleYearClick = (year: string): void => {
    setSelectedYear(year);
    setIsOpen(false);
  };

  return (
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
  );
};

export default DropDown;
