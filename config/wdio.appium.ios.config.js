exports.config = {
    runner: "local",
    host: "localhost",
    port: "4723",
    logLevel: "info",
    framework: "mocha",
    mochaOpts: {
        ui: "bdd",
        require: ["@babel/register"],
        timeout: 60000,
    },
    maxInstance: 1,
    sync: true,
    specs: ["test/sample.js"],
    services: [
        [
            "appium",
            {
                args: {},
                command: "appium",
            },
        ],
    ],
    capabilities: [
        {
            // platformName: "Android",
            // automationName: "UiAutomator2",
            // deviceName: "Pixel_3A",
            // udid: "emulator-5554",
            // app: `${process.cwd()}/app/Decathlon_3_22_4_92.apk`,
            // path: "/wd/hub",
        },
    ],
};
