const Employee = require('../lib/Employee');
// Access the js file with the class of Employee

describe('Employee', () => {
    //Describes the behavior of the employee
    it(' name, id, and email object created ', () => {

        //this is the action

        const employee = new Employee('David', 1, 'example@example.com')
            //Assertaions 
        expect(employee.name).toBe('David');

        expect(employee.id).toBe(1);

        expect(employee.email).toBe('example@example.com');

    });

    it(' Returns  name along with a valid argument', () => {

        const employee = new Employee('David', 1, 'example@example.com')

        expect(employee.getName()).toBe('David')

        expect(typeof employee.getName() == 'string').toBe(true)
    });

    it('Returns getID() when called', () => {

        const employee = new Employee('David', 1, 'example@example.com')

        expect(employee.getId()).toBe(1)

        expect(typeof employee.getId() == 'number').toBe(true)
    });

    it('Returns getEmail() when called', () => {

        const employee = new Employee('David', 1, 'example@example.com')

        expect(employee.getEmail()).toBe('example@example.com')
        expect(typeof employee.getEmail() == 'string').toBe(true)
    });

    it('Returns newRole() when called', () => {

        const employee = new Employee('David', 1, 'example@example.com')

        expect(employee.getRole()).toBe('Employee')



        expect(typeof employee.getRole() == 'string').toBe(true)


    });
})