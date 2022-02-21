const allure = require("allure-commandline");

exports.config = {
    logLevel: "info",
    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
        require: ["@babel/register"],
        timeout: 60000,
    },
    waitforTimeout: 10000,
    sync: true,
    services: [
        [
            "appium",
            {
                args: {},
                command: "appium",
            },
        ],
    ],
    reporters: [
        [
            "allure",
            {
                outputDir: "allure-results",
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: true,
            },
        ],
    ],

    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                5000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },

    after: function () {
        driver.removeApp("com.evamall.evacustomer");
    },
};
