import React, {useState} from "react";
import './LiftState.css';


const PersonsTable = (props) => {

  const tempPersonList = props.persons;
  const [tempList, setTempList] = useState(tempPersonList);

  function handleRemove(id) {
    const newList = tempList.filter((p) => p.id !== id);
    setTempList(newList);
  }

  console.log(tempList)
  function editPerson(event) {
    event.preventDefault();
    
  }
  
  return (
      <table>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
              </tr>
          </thead>
          <tbody>
              {tempList.map((p) => <tr key={p.id}>
                                          <td>{p.id}</td>
                                          <td>{p.name}</td>
                                          <td><button type="button" onClick={() => handleRemove(p.id)}>Remove</button></td>
                                          <td><button onChange={editPerson}>edit</button></td>
                                      </tr>)}                  
          </tbody>
      </table>
  );
}

const PersonsDemo = (props) => {
  return (
      <div>
          <h4>{props.heading}</h4>
          <PersonsTable persons={props.persons} />
      </div>
  );
}

const AllPersons = () => {
  const initialPersons = [{id: 1, name : "Peter"},
                          {id: 2, name : "Hanne"},
                          {id: 3, name : "Janne"},
                          {id: 4, name : "Holger"}];
                       
  const [person,setPerson] = useState(initialPersons);   
  const [name,setName] = useState("");

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    setName(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const p = person[person.length-1]
    let newPerson = {id: p.id+1, name : name};
    person.push(newPerson)
    setPerson(person);
  }

    return (
      <div>
        <h2>Lifting State Up</h2>  
        <p>Total Persons: {person.length}</p>
        <br/>
        <div className="row">

          <div className="column box">
            <PersonsDemo heading='All Persons' persons={person} />
          </div>

          <div className="column box">
            <h3>Create new person:</h3>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Name" id="name" onChange={handleChange}/>
              <br/>
              <input type="submit" value="Add" />
            </form>
          </div>


        </div>
        <br/><br/><br/><br/><br/><br/>
      </div>
        
    );

}    
/*

  const [name,setName] = useState("");
  let [listItems, setListItems] = useState([]);

  const initialPersons = [{id: 1, name : "Peter"},
                          {id: 2, name : "Hanne"},
                          {id: 3, name : "Janne"},
                          {id: 4, name : "Holger"}];

  listItems = initialMembers.map(m => <li key={m}>{m}</li>);
  let ids = Object.keys(listItems);
  
  console.log(ids);

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    setName(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    initialMembers.push(name)
    console.log(initialMembers);
    listItems = initialMembers.map(m => <li key={m}>{m}</li>);
    setListItems(listItems);
  }

    return (
    <div>
      <h2>Lifting State Up</h2>  
      <p>Total Persons: {listItems.length}</p>
      <br/>
      <div className="row">

        <div className="column box">
          <h3>All Persons:</h3>
          < PersonsTable />
        </div>

        <div className="column box">
          <h3>Create new person:</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" id="name" onChange={handleChange}/>
            <br/>
            <input type="submit" value="Add" />
          </form>
        </div>


      </div>
      <br/><br/><br/><br/><br/><br/>
    </div>
  );
}
*/
export default function LiftStateDemo() {
  return (
    <div style={{marginTop:25}}>
      <AllPersons />
    </div>
  );
}