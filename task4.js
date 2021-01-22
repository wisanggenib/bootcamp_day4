
//open it in index.html
let data
const getData = async () => {
    let response = await fetch('https://mul14.github.io/data/employees.json');
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        data = await response.json();
        // console.log(data[0].salary)
        console.log(data)


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
            console.log((i + 1) + " - " + data[i].first_name + " Live in " + data[i].addresses[0].city)
        }
    }
    console.log("=========================")
}

const getBirthday = async () => {
    //getData()
    console.log("Employer born in April - No 3")
    for (let i = 0; i < data.length; i++) {
        let search = data[i].birthday
        if (search.includes("-04-") === true) {
            console.log((i + 1) + " - " + data[i].first_name + " Was Born " + data[i].birthday)
        }
    }
    console.log("=========================")
}

const getDepartment = async () => {
    //getData()
    console.log("Employer That work at Research and development - No 4")
    for (let i = 0; i < data.length; i++) {
        if (data[i].department.name === "Research and development") {
            console.log((i + 1) + " - " + data[i].first_name + " Work On " + data[i].department.name)
        }
    }
    console.log("=========================")
}

const getAbsence = async () => {
    //getData()
    let total = 0 
    console.log("Employer That Absence -  No 5")
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].presence_list.length; j++) {
            let search = data[i].presence_list[j]
            if (search.includes("-10-") === true) {
                total += 1
            }
        }
        console.log((i + 1) + " - " + data[i].first_name + " Was Absence = " + total + " Times")
        total = 0
    }
    console.log("=========================")
}

const getAnswer = async () => {
    const A = await getData()
    const B = await getMaxSalary()
    const C = await getAddress()
    const D = await getBirthday()
    const E = await getDepartment()
    const F = await getAbsence()
}

getAnswer()