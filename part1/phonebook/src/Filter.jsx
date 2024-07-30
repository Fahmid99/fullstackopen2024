import React from "react";

function Filter({ filteredName, handleFilter }) {
  return (
    <div>
      filter shown with
      <input value={filteredName} onChange={handleFilter} />
    </div>
  );
}

export default Filter;
