const commonConfig = require("./wdio.common.config").config;

exports.config = {
    runner: "local",
    host: "localhost",
    port: "4723",
    maxInstance: 1,
    specs: [],
    capabilities: [
        {
            platformName: "iOS",
            automationName: "XCUITest",
            deviceName: "Bharath’s iPhone",
            udid: "97c571c265ef2938c076b87d4fb358be906d0919",
            app: `${process.cwd()}/app/Decathlon_3_1_33.ipa`,
            path: "/wd/hub",
            useNewWDA: false
        },
    ],
    ...commonConfig,
};
