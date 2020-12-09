import React, { useState } from "react";

import { SelectIcon } from "../../assets/icon";

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

  return (
    <div className="dropdown">
      <div className="dropdown__header" onClick={() => setIsOpen(!isOpen)}>
        <div className="dropdown__header-title">
          {selectedYear ? `Filtered by ${selectedYear}` : "Filter by Year"}
        </div>
        <img
          className="dropdown__header-icon"
          src={SelectIcon}
          alt="Sort Icon"
        />
      </div>
      {isOpen && (
        <ul className="dropdown-list">
          {filterYears.map((year) => (
            <li
              className="dropdown-list-item"
              key={year}
              onClick={() => handleFilterClick(year)}
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
