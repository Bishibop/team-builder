import React from 'react';

function Form({ onSubmit, onChange, member }) {

  return (
    <div className='form-container'>
      <h2>Add a new Team Member</h2>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            placeholder='John Doe'
            value={member.name}
            onChange={onChange}
          />
        </label>
        <label>
          Favorite Food:
          <input
            type='text'
            name='favoriteFood'
            placeholder='Beef jerky'
            value={member.favoriteFood}
            onChange={onChange}
          />
        </label>
        <label>
          Email:
          <input
            type='text'
            name='email'
            placeholder='johndoe@gmail.com'
            value={member.email}
            onChange={onChange}
          />
        </label>
        <label>
          Role:
          <input
            type='text'
            name='role'
            placeholder='Code Monkey'
            value={member.role}
            onChange={onChange}
          />
        </label>
        <button onSubmit={onSubmit}>Add team member</button>
      </form>
    </div>
  );
}

export default Form;


