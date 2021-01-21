
//open it in index.html
let data
const getData = async () => {
    let response = await fetch('https://mul14.github.io/data/employees.json');
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
         data = await response.json();
        // console.log(data[0].salary)


    } else {
        alert("HTTP-Error: " + response.status);
    }
}

const getMaxSalary = async () => {
    console.log("Employees which have salary more than Rp15.000.000")


    for (let i = 0; i < data.length; i++) {
        if (data[i].salary > 15000000) {
            console.log("NO. " + (i + 1) + " - " + data[i].first_name)
        }
    }

}

getData()