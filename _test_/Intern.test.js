const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('name, id, and email object created', () => {

        const intern = new Intern('David', 1, 'example@example.com')

        expect(intern.name).toBe('David');

        expect(intern.id).toBe(1);

        expect(intern.email).toBe('example@example.com');
    });

    it('Returns  name along with a valid argument', () => {

        const intern = new Intern('David', 1, 'example@example.com')


        expect(intern.getName()).toBe('David')

        expect(typeof intern.getName() == 'string').toBe(true)
    });

    it('Returns getID() when called', () => {

        const intern = new Intern('David', 1, 'example@example.com')

        expect(intern.getId()).toBe(1)

        expect(typeof intern.getId() == 'number').toBe(true)
    });

    it('Returns getEmail() when called', () => {

        const intern = new Intern('David', 1, 'example@example.com')

        expect(intern.getEmail()).toBe('example@example.com')

        expect(typeof intern.getEmail() == 'string').toBe(true)

    });


    it('Returns Intern getRole() when called', () => {

        const intern = new Intern('David', 1, 'example@example.com')

        expect(intern.getRole()).toBe('Intern')

        expect(typeof intern.getRole() == 'string').toBe(true)
    });



    it('School name returned when School() is called', () => {

        const intern = new Intern('David', 1, 'example@example.com', 'SAN JOSE STATE')

        expect(intern.getSchool()).toBe('SAN JOSE STATE')


        expect(typeof intern.getSchool() == 'string').toBe(true)
    });
})