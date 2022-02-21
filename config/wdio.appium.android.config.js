const commonConfig = require("./wdio.common.config").config;

exports.config = {
    runner: "local",
    host: "localhost",
    port: "4723",
    maxInstance: 1,
    specs: [`${process.cwd()}/test/android/sample.spec.js`],
    capabilities: [
        {
            platformName: "Android",
            automationName: "UiAutomator2",
            deviceName: "Pixel_3A",
            udid: "emulator-5554",
            app: `${process.cwd()}/app/Decathlon_3_22_4_92.apk`,
            path: "/wd/hub",
        },
    ],
    ...commonConfig,
};
