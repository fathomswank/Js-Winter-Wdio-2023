const { describe, it } = require("mocha");

describe('Launch Page', () => {

    it('Verify we can launch a page', async () => {

        await browser.url('https://www.weather.com');

        await browser.pause(10000);


    })
})