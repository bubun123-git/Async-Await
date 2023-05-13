console.log('person1: shows ticket');
console.log('person2: shows ticket');

// Create a promise for the wife bringing the tickets
const promiseWifeBringingTickets = new Promise((resolve, reject) => {
  // Wait 3 seconds
  setTimeout(() => {
    // Resolve the promise with the tickets
    resolve('tickets');
  }, 3000);
});

// Get the popcorn
const getPopcorn = promiseWifeBringingTickets.then(tickets => {
  console.log(`Husband: I have got popcorn`);
  console.log(`Husband: We should go in`);
  console.log(`Wife: No, I need butter on my popcorn`);

  // Add butter to the popcorn
  return `${tickets} butter`;
});

// Get the cold drink
function getColdDrink() {
  console.log(`Wife: I need a cold drink`);
  console.log(`Husband: I got your back`);

  return ;
}

// Watch the movie
Promise.all([getPopcorn, getColdDrink()]).then(([popcorn, coldDrink]) => {
  console.log(`Husband: Here you go, ${popcorn} and ${coldDrink}`);
  console.log(`Enjoy the movie!`);
});

console.log(`person4: shows ticket`);
console.log(`person5: shows ticket`);
