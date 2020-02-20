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

  const [memberToEdit, setMemberToEdit] = useState();

  function editClick(member) {
    setMemberToEdit(member);
    //setIsEditing(true);
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
        teamMembers={teamMembers}
        setTeamMembers={setTeamMembers}
        memberToEdit={memberToEdit}
        setMemberToEdit={setMemberToEdit}
        // handleNewSubmit={handleNewSubmit}
        // handleEditSubmit={handleEditSubmit}
        // handleChange={handleChange}
        // member={member}
        // isEditing={isEditing}
      />
    </div>
  );
}

export default App;
