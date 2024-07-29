import { useState } from "react";

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
      console.log(showAll);
    } else {
      setShowAll(true);
      console.log(showAll);
    }
  };

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with
      <input value={filteredName} onChange={handleFilter} />
      <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={handleNameInput} />
          number: <input value={newNumber} onChange={handleNumberInput} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {personsToShow.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ))}
    </div>
  );
};

export default App;
