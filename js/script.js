'use strict'

const btnSaveData = document.querySelector('.save_data')
const nameInput = document.getElementById('name_person')
const lastNameInput = document.getElementById('last_name')
const ageInput = document.getElementById('age')
const dataBirthInput = document.getElementById('Date_of_Birth')
const selectJob = document.getElementById('select_job')
const warnMessege = document.querySelector('.warn')

const workerArr = []

class Worker{
    constructor(name = 'имя', lastname = 'Фамилия',age, dataBirth, dinner = 2, workingDay = '8 часов'){
        this.name = name
        this.lastname = lastname
        this.age = age
        this.dataBirth = dataBirth
        this.dinner = dinner
        this.workingDay = workingDay
    }
}

class FrontendDev extends Worker{
    constructor(name, lastname, age, dataBirth, dinner, workingDay){
        super(name, lastname, age, dataBirth, dinner, workingDay)

    }

    salary = '50.000 рублей'
    Office = '1 офис'
}

class backendDev extends Worker{
    constructor(name, lastname, age, dataBirth, dinner, workingDay){
        super(name, lastname, age, dataBirth, dinner, workingDay)
        
    }

    salary = '70.000 рублей'
    Office = '3 офис'
}

class designer extends Worker{
    constructor(name, lastname, age, dataBirth, dinner, workingDay){
        super(name, lastname, age, dataBirth, dinner, workingDay)

    }

    salary = '40.000 рублей'
    Office = '7 офис'
}

class googleAnalitick extends Worker{
    constructor(name, lastname, age, dataBirth, dinner, workingDay){
        super(name, lastname, age, dataBirth, dinner, workingDay)

    }

    salary = '60.000 рублей'
    Office = '5 офис'
}

const createNewEssense = (name, lastName, age, Birth, select) => {
    if(select === 'front'){
        const developer = new FrontendDev(name, lastName, age, Birth)
        workerArr.push(developer)
        console.log(workerArr);
    }
}

const saveDataUser = (e) => {
    let nameUse, lastName, age, Birth, select

    if(nameInput.value === '' || lastNameInput.value === '' || ageInput.value === '' || dataBirthInput.value === ''){
        warnMessege.style.display = 'flex'
    } else{
        nameUse = nameInput.value
        lastName = lastNameInput.value
        age = ageInput.value
        Birth = dataBirthInput.value
        select = selectJob.value
        createNewEssense(nameUse, lastName, age, Birth, select)
    }
}

btnSaveData.addEventListener('click', saveDataUser)









