const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 

const API_URL = 'https://api.escuelajs.co/api/v1';


/**
 * * The idea is to have a method where the information from a request will be used
 * * Another method where the request itself will be made and managed.
 *
 * info
 */

 function fetchData(url, callback) {

    let xhttp = new XMLHttpRequest();

    xhttp.open('GET', url, true);

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            callback(null, JSON.parse(this.responseText));
        }
        const error = new Error('Failed to fetch data', url);
        return callback(error, null);
    };
    xhttp.send();
 }

/*
* In here I'm just using a anonymous function to do a simple console.log
* It could go deeper and call fetchData multiple times each inside the other creating a callback hell.
// */
 fetchData(`${API_URL}/products/2`, function(err, data) {
    if (err) {
        return console.log(err);
    }
    return console.log(data);
 })

/*
* In here using a actual method.
*/
 function editHtml(error, data) {
    if(error){
        return console.log(error);
    }
    return console.log(data);
 }

 fetchData(`${API_URL}/products/2`, editHtml);

/*
* This is a representation of multiple callbacks used internally
! Important. Take into account that the attributes looking for like id, category etc, might change their name hence could fail.
! errors like that could be avoid using ? parameter
*/
 fetchData(`${API_URL}/products`, function (error1, data1) {
    if (error1) return console.error(error1);
    fetchData(`${API_URL}/products/${data1[0].id}`, function (error2, data2) {
        if (error2) return console.error(error2);
        fetchData(`${API_URL}/categories/${data2?.category?.id}`, function (error3, data3) {
            if (error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
  });
});
