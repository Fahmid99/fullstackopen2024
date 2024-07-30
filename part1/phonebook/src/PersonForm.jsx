import React from "react";

function PersonForm({
  addNewPerson,
  newName,
  newNumber,
  handleNameInput,
  handleNumberInput,
}) {
  return (
    <div>
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
          number: <input value={newNumber} onChange={handleNumberInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  );
}

export default PersonForm;
