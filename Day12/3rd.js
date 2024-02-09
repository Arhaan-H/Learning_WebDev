// you're give an async function getData and a url as its parameter
// you have to send a GET request to the url using fetch API
// and return the response in json format from the
// async function getData


async function getData(url) {
    try {
        // Sending GET request using Fetch API
        const response = await fetch(url);

        // Parsing response body text as JSON
        const jsonData = await response.json();

        return jsonData; // Returning JSON data
    } catch (error) {
        // Handling any errors that occur during the process
        console.error('Error fetching data:', error);
        throw error; // Propagating the error
    }
}const url = 'https://api.example.com/data';
getData(url)
    .then(data => {
        console.log('Data:', data);
    })
    .catch(error => {
        console.error('Error:', error);
    });



try { module.exports = { getData } } catch(e) {}
