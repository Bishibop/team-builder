import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './Components/Member';
import Form from './Components/Form';

function App() {

  const [teamMembers, setTeamMembers] = useState([
    { name: 'Danny',
      email: 'danny111@gmail.com',
      role: 'frontend engineer',
      favoriteFood: 'Strawberry icecream' },
    { name: 'Sally',
      email: 'sallymills@gmail.com',
      role: 'backend engineer',
      favoriteFood: 'Chocolate icecream' },
    { name: 'Franny',
      email: 'franny@gmail.com',
      role: 'sales engineer',
      favoriteFood: 'Cigarettes' },
    { name: 'Zooey',
      email: 'zooey@gmail.com',
      role: 'designer',
      favoriteFood: 'Coffee' }
  ]);

  const [newMember, setNewMember] = useState({
    name: '',
    email: '',
    role: '',
    favoriteFood: ''
  })

  function handleSubmit(event) {
    setTeamMembers([...teamMembers, newMember])
    setNewMember({
      name: '',
      email: '',
      role: '',
      favoriteFood: ''
    });
    event.preventDefault();
  }

  function handleChange(event) {
    console.log('target event: ', event.target.name, event.target.value);
    setNewMember({ ...newMember, [event.target.name]: event.target.value });
  }

  return (
    <div className="App">
      {teamMembers.map(member => (
        <Member key={ member.email } member={ member } />
      ))}
      <Form 
        onSubmit={handleSubmit}
        onChange={handleChange}
        member={newMember}
      />
    </div>
  );
}

export default App;
