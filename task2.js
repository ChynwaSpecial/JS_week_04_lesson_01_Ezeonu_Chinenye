const userBio1 = {
    occupation: 'Doctor',
    height: '5ft',
    gender: 'Female',
    nationality: 'Nigerian'
  };
  
  const userBio2 = {
    occupation: 'Teacher',
    height: '5ft 6in',
    gender: 'Female',
    nationality: 'Kenyan'
  };
  
  const userBio3 = {
    occupation: 'Software Engineer',
    height: '6ft',
    gender: 'Male',
    nationality: 'Indian'
  };
  
  function displayUserBio(userBio) {
    const { gender, occupation } = userBio;
    console.log(`The user is a ${gender} and works as a ${occupation}.`);
  }
  
  displayUserBio(userBio1);
  displayUserBio(userBio2);
  displayUserBio(userBio3);
  