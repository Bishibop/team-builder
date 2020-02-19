import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Member from './components/Member';
import Form from './components/Form';

function App() {

  const [teamMembers, setTeamMembers] = useState([
    { id: 1,
      name: 'Danny',
      email: 'danny111@gmail.com',
      role: 'frontend engineer',
      favoriteFood: 'Strawberry icecream' },
    { id: 2,
      name: 'Sally',
      email: 'sallymills@gmail.com',
      role: 'backend engineer',
      favoriteFood: 'Chocolate icecream' },
    { id: 3,
      name: 'Franny',
      email: 'franny@gmail.com',
      role: 'sales engineer',
      favoriteFood: 'Cigarettes' },
    { id: 4,
      name: 'Zooey',
      email: 'zooey@gmail.com',
      role: 'designer',
      favoriteFood: 'Coffee' }
  ]);

  // Is this supposed to be in the form component?
  const [member, setMember] = useState({
    id: 5,
    name: '',
    email: '',
    role: '',
    favoriteFood: ''
  });

  const [isEditing, setIsEditing] = useState(false);

  function handleNewSubmit(event) {
    setTeamMembers([...teamMembers, member])
    setMember({
      id: member.id + 1,
      name: '',
      email: '',
      role: '',
      favoriteFood: ''
    });
    event.preventDefault();
  }

  function handleEditSubmit(event) {
    // Doesn't need to be anything here?
    // Or need to setEditMember here...
    // Will that mutate it in the team state object?
    // Or do I need to set the team state object as well?
    // You need to loop through the team members, find the one that matches the
    // one you edited and then update the whole list with the new edited
    // version
    console.log('Submiting an edited user...', member);

    setTeamMembers(teamMembers => {
      const i = teamMembers.findIndex(teamMember => {
        return teamMember.id === member.id
      });
      teamMembers[i] = member;
      return teamMembers;
    })
    setIsEditing(false);
    setMember({
      name: '',
      email: '',
      role: '',
      favoriteFood: ''
    });
    event.preventDefault();
  }

  function handleChange(event) {
    console.log('target event: ', event.target.name, event.target.value);
    setMember({ ...member, [event.target.name]: event.target.value });
  }

  function editClick(member) {
    setMember(member);
    setIsEditing(true);
  }

  return (
    <div className="App">
      {teamMembers.map(member => (
        <Member
          key={member.id}
          member={member}
          editClick={() => editClick(member)}
        />
      ))}
      <Form 
        handleNewSubmit={handleNewSubmit}
        handleEditSubmit={handleEditSubmit}
        handleChange={handleChange}
        member={member}
        isEditing={isEditing}
      />
    </div>
  );
}

export default App;
