import { useState } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");
  const [filteredName, setFilteredName] = useState("");
  const [newNumber, setnewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);

  const personsToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(filteredName.toLowerCase())
      );

  const addNewPerson = (e) => {
    e.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const personObj = {
        id: Math.floor(Math.random()),
        name: newName,
        number: newNumber,
      };
      setPersons(persons.concat(personObj));
    }
  };

  const handleNameInput = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberInput = (e) => {
    setnewNumber(e.target.value);
  };

  const handleFilter = (e) => {
    setFilteredName(e.target.value);

    if (e.target.value) {
      setShowAll(false);
    } else {
      setShowAll(true);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filteredName={filteredName} handleFilter={handleFilter} />
      <h3>Add a new person</h3>
      <PersonForm
        addNewPerson={addNewPerson}
        newName={newName}
        newNumber={newNumber}
        handleNameInput={handleNameInput}
        handleNumberInput={handleNumberInput}
      />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
