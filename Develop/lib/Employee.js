class Employee {
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }
    getName() {
        return this.name
    }
    getId() {
        return this.id
    }
    getEmail() {
        return this.email
    }
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee //This exports it to make it available to grab from other files. Kind of like a global variable for your files. 