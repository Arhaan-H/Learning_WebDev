// persons is an array of object person 
// (definition of person given in instructions)
// you have to return an array containing names of 
// persons with salary less than 30000
// use Array.map() and Array.filter() for this task


const person = {
    name: "...",
    id: "...",
    salary: "..."
 };
 
 function getNames(persons) {
     return persons
         .filter(person => person.salary < 30000) // Filter persons with salary less than 30000
         .map(person => person.name); // Map the filtered persons to their names
 }
 
 // Example usage:
 const persons = [
     { name: "John", id: 1, salary: 25000 },
     { name: "Alice", id: 2, salary: 35000 },
     { name: "Bob", id: 3, salary: 28000 },
     { name: "Emma", id: 4, salary: 29000 }
 ];
 
 const names = getNames(persons);
 console.log(names); // Output: ["John", "Bob", "Emma"]
 
 
 try { module.exports = { getNames } } catch(e) {}