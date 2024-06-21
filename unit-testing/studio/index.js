
let launchcode = {
    organization: 'nonprofit',
    executiveDirector: 'Jeff',
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development", "Data Analysis", "Liftoff"],

    launchOutput: function (i) {
        if (i % 2 == 0) {
            if (i % 3 == 0) {
                if (i % 5 == 0) {
                    return 'LaunchCode Rocks!'
                }
                return 'LaunchCode!';
            } else if (i % 5 == 0) {
                return 'Launch Rocks!';
            }
            return "Launch!";
        }
        else if (i % 3 == 0) {
            if (i % 5 == 0) {
                return 'Code Rocks!';
            }
            return 'Code!';
        } else if (i % 5 == 0) {
            return 'Rocks!';
        } else {
            return "Rutabagas! That doesn't work.";
        }
    }
};

module.exports = launchcode;

