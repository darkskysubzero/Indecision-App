export const isAdult = (age) => {
  if (age > 18) {
    console.log('Person is an adult');
  } else {
    console.log('Person is still young!');
  }
};

export const canDrink = (age) => {
  console.log(`Just dont drink even at ${age}`);
};
