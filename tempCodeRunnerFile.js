ction addTeamMember() {
    inquirer.prompt([{
            type: 'list',
            message: 'next employee',
            name: 'nextEmployee',
            choices: ['engineer', 'intern', 'finish']
        }])
        .then(
            function(data) {
                if (data.nextEmployee === 'engineer') {
                    createEngineer()
                } else if (data.nextEmployee === 'intern') {
                    createIntern()

                } else if (data.nextEmployee === 'finish') {
                    writeToHTML();
                }
            }
        )
}