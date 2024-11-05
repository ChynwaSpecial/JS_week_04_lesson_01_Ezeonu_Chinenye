const users = [
  { firstName: 'Chinenye', lastName: 'Ezeh', complexion: 'Fair', occupation: 'Software Engineer' },
  { firstName: 'Precious', lastName: 'Okafor', complexion: 'Brown', occupation: 'Fashionista' },
  { firstName: 'Micheal', lastName: 'Francis', complexion: 'Dark', occupation: 'Musician' },
  { firstName: 'Sunday', lastName: 'Ajah', complexion: 'Light', occupation: 'Doctor' }
];

const container = document.getElementById('userInfoContainer');

users.forEach(user => {
  let userDiv = document.createElement('div');
  userDiv.innerHTML = `<p>First Name: ${user.firstName}</p>
                       <p>Last Name: ${user.lastName}</p>
                       <p>Complexion: ${user.complexion}</p>
                       <p>Occupation: ${user.occupation}</p>`;
  container.appendChild(userDiv);
});