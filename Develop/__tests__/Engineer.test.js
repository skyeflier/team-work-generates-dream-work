const Engineer = require('../lib/Engineer')

test('Engineer test', function () {
    let test = new Engineer('John', '123', 'john@gmail.com', 'github.com/name')
    expect(test.name).toBe('John')
    expect(test.id).toBe('123')
    expect(test.email).toBe('john@gmail.com')
    expect(test.gitHub).toBe('github.com/name')
})