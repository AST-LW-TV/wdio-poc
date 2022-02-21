exports.config = {
    logLevel: "info",
    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
        require: ["@babel/register"],
        timeout: 60000,
    },
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

    after: function () {
        driver.removeApp("com.evamall.evacustomer");
    },
};