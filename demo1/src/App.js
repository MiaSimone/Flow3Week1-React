
import './App.css';
import PropTypes from 'prop-types';

function Welcome(props) {
  const {name, phone, isMember} = props;
  const member = isMember ? "Yes" : "false";
  return <p>
    {name} phone: {phone}, isMember: {member}</p>;
}

Welcome.prototype = {
  name : PropTypes.string.isRequired,
  phone : PropTypes.string,
  isMember : PropTypes.bool.isRequired
}

Welcome.defaultProps = {
  isMember : false
}

function App() {
  return (
    <div>
      <Welcome name="Sara" phone="12345"/>
    </div>
  );
}


export default App;
