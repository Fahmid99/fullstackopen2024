import { useState, useEffect } from "react";
import Filter from "./Filter";
import PersonForm from "./PersonForm";
import Persons from "./Persons";
import axios from "axios";
import personService from "./services/persons";
const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");
  const [filteredName, setFilteredName] = useState("");
  const [newNumber, setnewNumber] = useState("");
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    personService.getAll().then((response) => {
      setPersons(response.data);
    });
  }, []);

  const personsToShow = showAll
    ? persons
    : persons.filter((person) =>
        person.name.toLowerCase().includes(filteredName.toLowerCase())
      );

  const addNewPerson = (e) => {
    e.preventDefault();
    const existingPerson = persons.find((person) => person.name === newName);
    const updatedPerson = { ...existingPerson, number: newNumber};
    if (
      existingPerson &&
      confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )
    ) {
      personService
        .update(existingPerson.id, updatedPerson)
        .then((response) => {
          setPersons(
            persons.map((person) =>
              person.id !== existingPerson.id ? person : response.data
            )
          );
        });
    } else {
      const personObj = {
        name: newName,
        number: newNumber,
        id: Math.floor(Math.random() * 1000).toString(),
      };
      personService.create(personObj).then((response) => {
        setPersons(persons.concat(response.data));
        setNewName("");
        setnewNumber("");
      });
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

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      personService.deletePerson(id);
      setPersons(persons.filter((person) => person.id !== id));
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
      <Persons
        personsToShow={personsToShow}
        handleDelete={(id) => handleDelete(id)}
      />
    </div>
  );
};

export default App;
