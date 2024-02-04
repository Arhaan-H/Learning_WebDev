/* Create a class named Counter with non-static property count and a member function increment
& -- Read the given instructions -- */

/* Code from here */
class Counter {
    constructor() {
      this.count = 0;
    }
  
    increment() {
      this.count += 1;
    }
  }
  
  const Count = new Counter();
  console.log(Count.count);
  
  Count.increment();
  console.log(Count.count);
  
  /* to here */
  
  try { module.exports = { Counter } } catch (e) { }