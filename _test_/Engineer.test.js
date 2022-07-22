const Engineer = require('../lib/Engineer');

describe('Engineer', () => {


    it("name, id, and email object created", () => {

        const engineer = new Engineer('David', 1, 'example@example.com')

        expect(engineer.name).toBe('David');


        expect(engineer.id).toBe(1);


        expect(engineer.email).toBe('example@example.com');
    });



    it('Returns  name along with a valid argument', () => {

        const engineer = new Engineer('David', 1, 'example@example.com')

        expect(engineer.getName()).toBe('David')


        expect(typeof engineer.getName() == 'string').toBe(true)

    });




    it('Returns getID() when called', () => {

        const engineer = new Engineer('David', 1, 'example@example.com')

        expect(engineer.getId()).toBe(1)


        expect(typeof engineer.getId() == 'number').toBe(true)
    });




    it('Returns getEmail() when called', () => {

        const engineer = new Engineer('David', 1, 'example@example.com')

        expect(engineer.getEmail()).toBe('example@example.com')

        expect(typeof engineer.getEmail() == 'string').toBe(true)


    });




    it('returns Engineer when getRole() is called', () => {



        const engineer = new Engineer('David', 1, 'example@example.com')

        expect(engineer.getRole()).toBe('Engineer')



        expect(typeof engineer.getRole() == 'string').toBe(true)

    });




    it('should return a github username if getGithub() is called', () => {


        const engineer = new Engineer('David', 1, 'example@example.com', 'DNA601')

        expect(engineer.getGithub()).toBe('DNA601')




        expect(typeof engineer.getGithub() == 'string').toBe(true)

    });
})