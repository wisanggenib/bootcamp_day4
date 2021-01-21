
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
//get sallary
const getMaxSalary = async () => {
    //getData()
    console.log("Employees which have salary more than Rp15.000.000 - No 1")
    for (let i = 0; i < data.length; i++) {
        if (data[i].salary > 15000000) {
            console.log((i + 1) + " - " + data[i].first_name)
        }
    }
    console.log("=========================")
    //console.log(data[1].addresses[0].city)
}

const getAddress = async () => {
    //getData()
    console.log("Employer that live in Jakarta - No 2")
    for (let i = 0; i < data.length; i++) {
        let search = data[i].addresses[0].city
        if (search.includes("Jakarta") === true) {
            console.log((i + 1) + " - " +data[i].first_name + " Live in " + data[i].addresses[0].city)
        }
    }
    console.log("=========================")
}

const getAnswer = async () => {
    const A = await getData()
    const B = await getMaxSalary()
    const C = await getAddress()
}

getAnswer()