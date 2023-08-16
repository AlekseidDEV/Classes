'use strict'

const btnSaveData = document.querySelector('.save_data')
const nameInput = document.getElementById('name_person')
const lastNameInput = document.getElementById('last_name')
const ageInput = document.getElementById('age')
const dataBirthInput = document.getElementById('Date_of_Birth')
const selectJob = document.getElementById('select_job')
const warnMessege = document.querySelector('.warn')
const tableUserBody = document.querySelector('.sub')


let workerArr = []

class Worker {
    constructor(name, lastname, age, dataBirth) {
        this.userName = name
        this.useLastName = lastname
        this.useAge = age
        this.useDataBirth = dataBirth
    }

    get userName() {
        return this.name
    }

    set userName(userName) {
        this.name = userName
    }


    get useAge() {
        return this.age
    }

    set useAge(userAge) {
        this.age = userAge
    }

    get useDataBirth() {
        return this.dataBirth
    }

    set useDataBirth(userBirth) {
        this.dataBirth = userBirth
    }

}

class FrontendDev extends Worker {
    constructor(name, lastname, age, dataBirth, jobTitle) {
        super(name, lastname, age, dataBirth, jobTitle)
        this.userTitleJob = jobTitle
    }

    salary = '50.000 рублей'
    Office = '1 офис'

    get userTitleJob() {
        return this.userTitleJob
    }

    set userTitleJob(userTitleJob) {
        this.jobTitle = userTitleJob
    }
}

class backendDev extends Worker {
    constructor(name, lastname, age, dataBirth) {
        super(name, lastname, age, dataBirth)

    }

    salary = '70.000 рублей'
    Office = '3 офис'
}

class designer extends Worker {
    constructor(name, lastname, age, dataBirth) {
        super(name, lastname, age, dataBirth)

    }

    salary = '40.000 рублей'
    Office = '7 офис'
}

class googleAnalitick extends Worker {
    constructor(name, lastname, age, dataBirth) {
        super(name, lastname, age, dataBirth)

    }

    salary = '60.000 рублей'
    Office = '5 офис'
}

const getDataStorage = () => {
    const data = localStorage.getItem('list-worker')
    workerArr = JSON.parse(data) || []
    renderWorkerTable()
}

const saveDataStorage = () => {
    const saveData = JSON.stringify(workerArr)
    localStorage.setItem('list-worker', saveData)
}

const renderWorkerTable = () => {
    tableUserBody.innerHTML = ''
    workerArr.forEach((elem, index) => {
        const newField = document.createElement('tr')
        newField.classList.add('field_worker')
        tableUserBody.append(newField)

        newField.innerHTML = '<td>' +
            elem.name +
            '</td>' +
            '<td>' +
            elem.useLastName +
            '</td>' +
            '<td>' +
            elem.age +
            '</td>' +
            '<td>' +
            elem.dataBirth +
            '</td>' +
            '<td>' +
            elem.salary +
            '</td>' +
            '<td>' +
            elem.Office +
            '</td>' +
            '<td>' +
            elem.jobTitle +
            '</td>' +
            '<td>' +
            '<button class = "delete_user"> Удалить сотрудника</button>' +
            '</td>'

        const deleteBtn = newField.querySelector('.delete_user')
        deleteBtn.addEventListener('click', () => {
            newField.parentNode.removeChild(newField)
            deleteBtn.setAttribute('id', index)
            workerArr.splice(index, 1)
            saveDataStorage()
        })
    })

    saveDataStorage()
}

const createNewEssense = (name, lastName, age, Birth, select, job) => {
    if (select === 'front') {
        const frontend = new FrontendDev(name, lastName, age, Birth)
        frontend.jobTitle = job
        workerArr.push(frontend)
    } else if (select === 'back') {
        const backEnd = new backendDev(name, lastName, age, Birth)
        backEnd.jobTitle = job
        workerArr.push(backEnd)
    } else if (select === 'design') {
        const design = new designer(name, lastName, age, Birth)
        design.jobTitle = job
        workerArr.push(design)
    } else if (select === 'analitick') {
        const analit = new googleAnalitick(name, lastName, age, Birth)
        analit.jobTitle = job
        workerArr.push(analit)
    }

    renderWorkerTable(lastName)
}

const getDataUser = (e) => {
    let nameUse, lastName, age, Birth, select, selectJobTitle

    if (nameInput.value === '' || lastNameInput.value === '' || ageInput.value === '' || dataBirthInput.value === '') {
        warnMessege.style.display = 'flex'
    } else {
        nameUse = nameInput.value
        lastName = lastNameInput.value
        age = ageInput.value
        Birth = dataBirthInput.value
        select = selectJob.value
        selectJobTitle = selectJob.options[selectJob.selectedIndex].textContent
        createNewEssense(nameUse, lastName, age, Birth, select, selectJobTitle)
    }
}

btnSaveData.addEventListener('click', getDataUser)

getDataStorage()