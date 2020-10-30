import React, {useState} from "react";

const NameForm = () => {
  const [name,setName] = useState("");

  function handleChange(event) {
    const target = event.target;
    const value = target.value;
    setName(value);
  }

  function handleSubmit(event) {
    event.preventDefault();
      window.alert(name);
  }
 
  return (
    <div>
      <h2>Simple form</h2>  
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" id="name" onChange={handleChange}/>
        <input type="submit" value="Submit" />
      </form>
      <p>Name: {name}</p>
    </div>
  );
};
 
export default function FormDemo() {
  return (
    <div style={{marginTop:25}}>
      <NameForm />
    </div>
  );
}
 