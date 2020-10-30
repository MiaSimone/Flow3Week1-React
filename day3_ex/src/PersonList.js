import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

const PersonList = ( props ) => {

  const {persons, deletePerson, editPerson} = props;
  
  return (
    <React.Fragment>
      <h2>All Persons:</h2>
      <table>
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Name</th>
              </tr>
          </thead>
          <tbody>
              {persons.map(person => <tr key={person.id}>
                                          <td>{person.id}</td>
                                          <td>{person.name}</td>
                                          <td><a href="xx" onClick={(e)=>{e.preventDefault(); deletePerson(person.id)}}>Delete</a></td>
                                          <td><button onClick={(e)=>{e.preventDefault(); deletePerson(person.id)}}>Edit</button></td>
                                          <td><button onClick={(e)=>{e.preventDefault(); editPerson(person)}}>Edit</button></td>
                                      </tr>)}                  
          </tbody>
      </table>

    </React.Fragment>
  );
};
export default PersonList;

PersonList.propTypes = {
  persons: PropTypes.array,
  deletePerson: PropTypes.func
}
