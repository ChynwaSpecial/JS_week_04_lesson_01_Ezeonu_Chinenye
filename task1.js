const calAge = (dob, year, name, location) => {
    const birthYear = new Date(dob).getFullYear();
    const age = year - birthYear;
    const message = `Hello ${name} from ${location}, your current age is ${age}`;
    console.log(message);
    return age;
  };
  
  calAge('1989-01-06', 2024, 'Paul', 'Nigeria');
  