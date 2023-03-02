const Manager = require('../lib/Manager')

test('Engineer test', function () {
    let test = new Manager('John', '123', 'john@gmail.com', 'office number')
    expect(test.name).toBe('John')
    expect(test.id).toBe('123')
    expect(test.email).toBe('john@gmail.com')
    expect(test.officeNumber).toBe('office number')
})