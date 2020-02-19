import React from 'react';

function Form({
  handleNewSubmit,
  handleEditSubmit,
  handleChange,
  member,
  isEditing
}) {

  return (
    <div className='form-container'>
      <h2>{isEditing ? 'Edit team member' : 'Add a new Team Member'}</h2>
      <form onSubmit={isEditing ? handleEditSubmit : handleNewSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            placeholder='John Doe'
            value={member.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Favorite Food:
          <input
            type='text'
            name='favoriteFood'
            placeholder='Beef jerky'
            value={member.favoriteFood}
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input
            type='text'
            name='email'
            placeholder='johndoe@gmail.com'
            value={member.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Role:
          <input
            type='text'
            name='role'
            placeholder='Code Monkey'
            value={member.role}
            onChange={handleChange}
          />
        </label>
        <button>{isEditing ? 'Edit' : 'Add'}</button>
      </form>
    </div>
  );
}

export default Form;


