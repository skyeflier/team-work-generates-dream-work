const Intern = require('../lib/Intern')

test('Engineer test', function () {
    let test = new Intern('John', '123', 'john@gmail.com', 'school')
    expect(test.name).toBe('John')
    expect(test.id).toBe('123')
    expect(test.email).toBe('john@gmail.com')
    expect(test.school).toBe('school')
})