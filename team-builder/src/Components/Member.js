import React from 'react';

function Member({member}) {

  return (
    <div className="member">
      <p><strong>Name:</strong> {member.name}</p>
      <p><strong>Favorite Food:</strong> {member.favoriteFood}</p>
      <p><strong>Email:</strong> {member.email}</p>
      <p><strong>Role:</strong> {member.role}</p>
    </div>
  );
}

export default Member;

