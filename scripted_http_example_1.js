/**
 * An example of how to issue XMLHttpRequests in JS
 */

var rootUrl = 'https://serene-island-81305.herokuapp.com';

/* Part 1 - A normal GET request */

    // 1. Create a basic XMLHttpRequest object

    // 2. Use the open() function as a GET request to Heroku app

    // 3. Register the onreadystatechange event handler

    // 4. Use the send() function to issue the request

    // 5. Examine the request within the event handler

    // 6. Console.log the data

/* Part 2 - A normal POST request */

    // 1. Create another XMLHttpRequest

    // 2. Use the open() function as a POST request to Heroku app

    // 3. Set the request header to application/json

    // 4. Register the handler

    // 5. Use the send() function with the body set

    // 6. alert if successful

/* Part 3 - A synchronous request */

    // 1. Create a basic XMLHttpRequest object

    // 2. Use the open() function as a GET request to special method in Heroku app

    // 3. Show effects in browser

/* Part 4 - Demonstrate encoding techniques */

    var form = {
        id: 1,
        name: 'Mr. Miyaki',
        age: 70
    };

    // 1. JSON.stringify()
    console.log(JSON.stringify(form));

    // 2. FormData for multipart/form-data
    function createFormData(data) {
        var formData = new FormData();

        Object.keys(data).forEach(function (elem) {
            formData.append(elem, data[elem]);
        });

        return formData;
    };

    // 3. application/x-www-form-urlencoded with encodeURIComponent
    function createFormUrlEncoded(data) {
        var formUrlEncoded = [];
        Object.keys(data).forEach(function (elem) {
            var value = encodeURIComponent(data[elem]);
            var header = encodeURIComponent(elem);
            formUrlEncoded.push(header + '=' + value);
        });
        return formUrlEncoded.join('&');
    };

/* Part 5 - Demonstrate the progress event */

    // 1. Issue request to special synchronous method /file

    // 2. Show the results in a progress bar
