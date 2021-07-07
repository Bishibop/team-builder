import React, { useState } from 'react';

function Form({
  teamMembers,
  setTeamMembers,
  memberToEdit,
  setMemberToEdit
  // handleNewSubmit,
  // handleEditSubmit,
  // handleChange,
  // member,
  // isEditing
}) {

  const [member, setMember] = useState({
    id: 5,
    name: '',
    email: '',
    role: '',
    favoriteFood: ''
  });

  function handleNewSubmit(event) {
    console.log('Submitted member: ', member);
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
    console.log('Edited member: ', memberToEdit);
    setTeamMembers(teamMembers => {
      const i = teamMembers.findIndex(teamMember => {
        return teamMember.id === memberToEdit.id
      });
      teamMembers[i] = memberToEdit;
      return teamMembers;
    })
    setMemberToEdit(null);
    //setIsEditing(false);
    // setMember({
    //   id: Math.max(...teamMembers.map(member => member.id)) + 1,
    //   name: '',
    //   email: '',
    //   role: '',
    //   favoriteFood: ''
    // });
    event.preventDefault();
  }

  function handleChange(event) {
    console.log('Change event: ', member);
    if (memberToEdit) {
      setMemberToEdit({ ...memberToEdit, [event.target.name]: event.target.value });
    } else {
      setMember({ ...member, [event.target.name]: event.target.value });
    }
  }

  return (
    <div className='form-container'>
      <h2>{memberToEdit ? 'Edit team member' : 'Add a new Team Member'}</h2>
      <form onSubmit={memberToEdit ? handleEditSubmit : handleNewSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            placeholder='John Doe'
            value={memberToEdit ? memberToEdit.name : member.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Favorite Food:
          <input
            type='text'
            name='favoriteFood'
            placeholder='Beef jerky'
            value={memberToEdit ? memberToEdit.favoriteFood : member.favoriteFood}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type='text'
            name='email'
            placeholder='johndoe@gmail.com'
            value={memberToEdit ? memberToEdit.email : member.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Role:
          <input
            type='text'
            name='role'
            placeholder='Code Monkey'
            value={memberToEdit ? memberToEdit.role : member.role}
            onChange={handleChange}
          />
        </label>
        <button>{memberToEdit ? 'Edit' : 'Add'}</button>
      </form>
    </div>
  );
}

export default Form;


