const Employee = require('../lib/Employee')

test('Employee test', function () {
    let test = new Employee('John', '123', 'john@gmail.com')
    expect(test.name).toBe('John')
    expect(test.id).toBe('123')
    expect(test.email).toBe('john@gmail.com')
})