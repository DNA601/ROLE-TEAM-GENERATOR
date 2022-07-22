const Manager = require('../lib/Manager');

describe('Manager', () => {
    it(' name, id, and email object created', () => {

        const manager = new Manager('David', 1, 'example@example.com')

        expect(manager.name).toBe('David');
        expect(manager.id).toBe(1);
        expect(manager.email).toBe('example@example.com');
    });

    it(' Returns  name along with a valid argument', () => {


        const manager = new Manager('David', 1, 'example@example.com')


        expect(manager.getName()).toBe('David')
        expect(typeof manager.getName() == 'string').toBe(true)
    });

    it('Returns getID() when called', () => {

        const manager = new Manager('David', 1, 'example@example.com')

        expect(manager.getId()).toBe(1)
        expect(typeof manager.getId() == 'number').toBe(true)
    });

    it('Returns getEmail() when called', () => {


        const manager = new Manager('David', 1, 'example@example.com')

        expect(manager.getEmail()).toBe('example@example.com')

        expect(typeof manager.getEmail() == 'string').toBe(true)

    });

    it('Returns manager getRole()  when called', () => {


        const manager = new Manager('David', 1, 'example@example.com')


        expect(manager.getRole()).toBe('Manager')

        expect(typeof manager.getRole() == 'string').toBe(true)
    });


    it('Returns office number if getOfficeNumber() is called', () => {


        const manager = new Manager('David', 1, 'example@example.com', 123)


        expect(manager.getOfficeNumber()).toBe(123)

        expect(typeof manager.getOfficeNumber() == 'number').toBe(true)

    });
})