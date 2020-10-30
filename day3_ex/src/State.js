import React, {useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonList from "./PersonList"
import NewPerson from "./NewPerson"

function State() {
  const initialData = [
    { id: 1, name: "Peter" },
    { id: 2, name: "Carl" },
    { id: 3, name: "Emma" }
  ]
  const [persons, setPersons] = useState(initialData);
  const [newPerson, setNewPerson] = useState({ id: "", name: "" });
  console.log(persons)

  const addPerson = person => {
    if (person.id === "") { // id=-1 Indicates a new object
      person.id = (persons.length+1);
      persons.push(person);
    } else {//if id != "", it's an existing person. Find it and add changes
      let personToEdit = persons.find(t => t.id === person.id);
      personToEdit.name = person.name;
    }
    setPersons([...persons]);
    setNewPerson({id:"", name:""})
  };

  const editPerson = person => {
    setNewPerson(person);
  };


  const deletePerson = id => {
    console.log(id);
    
    for (let i=0; i<persons.length; i++){
      if (persons[i].id === id){
        console.log(id);
        persons.splice(i, 1);
      }
    }
    
    setPersons([...persons]);
  };
  
  return (
    <div className="container outer">
      <h2 style={{ textAlign: "center", marginBottom:25 }}>
      Lifting State Up
      </h2>
      <p>Total persons: {persons.length}</p>

      <div className="row">
        <div className="col-6 allPersons">
          <PersonList persons={persons} deletePerson={deletePerson} editPerson={editPerson}/>
        </div>
        <div className="col-5 new-person">
          <NewPerson
            addPerson={addPerson}
            nextPerson={newPerson}            
          />
        </div>
      </div>
    </div>
  );
}
export default State;
