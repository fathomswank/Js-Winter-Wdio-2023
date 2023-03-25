const { expect } = require("chai");

const moment = require("moment");

describe('WebDriver IO Code Test', () => {

    // Question - 1: (50-points)
    /**
     * Testcase: Verify rewards form is empty and Conitnue button is disabled
     * Steps:
     * 1. Launch hotels.com
     * 2. Click on Learn about Hotels.com Rewards
     * 3. -> Verify Hotels Rewards opened in a new window
     * 4. Click on Join Now
     * 5. -> Verify Form is blank
     * 6. -> Verify Continue button is NOT enabled
     */
    it('Verify rewards form is empty and Conitnue button is disabled', async () => {
 
        await browser.url('https://www.hotels.com/');
        await browser.pause(3000);

        const rewardsLink = await $("//a[text()='Learn about Hotels.com Rewards']").click();
        await browser.pause(5000);

        const allHandles = await browser.getWindowHandles();
        await browser.pause(1000);

        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const currentUrl = await browser.getUrl();
            if (currentUrl.localeCompare('https://www.hotels.com/hotel-rewards-pillar/hotelscomrewards.html') === 0) {
                break;
            }
        }
        
        const joinNowLink = await $("//a[contains(text() , 'Now')]").click();
        await browser.pause(2000);
        
        const email = await $('//*[@id="signupFormEmailInput"]');
        const emailText = await email.getText();
        expect(emailText, 'Not Blank').to.be.equal('');

        const firstName = await $('//*[@id="signupFormFirstNameInput"]');
        const firstNameText = await firstName.getText();
        expect(firstNameText, 'Not Blank').to.be.equal('');

        const lastName = await $('//*[@id="signupFormLastNameInput"]');
        const lastNameText = await lastName.getText();
        expect(lastNameText, 'Not Blank').to.be.equal('');

        const pass = await $('//*[@id="signupFormPasswordInput"]');
        const passText = await pass.getText();
        expect(passText, 'Not Blank').to.be.equal('');
        await browser.pause(1000);

        const continueBtn = await $('//*[@id="signupFormSubmitButton"]').isEnabled();

        
        

    


    });



    // Question - 2: (50-points)
    /**
     * Testcase: Verify past dates are disabled in Calendar
     * Steps:
     * 1. Launch hotels.com
     * 2. Click on Dates section
     * 3. If not already, go to current month
     * 4. -> Verify all past dates are disabled
     */
    it.only('Verify past dates are disabled in Calendar', async () => {

        await browser.url('https://www.hotels.com/');
        await browser.pause(3000);

        const datesBtn = await $('//*[@id="date_form_field-btn"]').click();
        await browser.pause(1000);


        const backBtn = await $('//button[@data-stid="date-picker-paging"][1]').click();
        await browser.pause(1000);

        let currentDayAbbr = moment().format('D');
        currentDayAbbr = Number(currentDayAbbr);


        const allDates = await $$("//td[contains(@colspan, '3')]/following-sibling::td[1]/child::button");

    

        for (const date of allDates) {
            const text = await date.getAttribute('aria-label')
            if(text.endsWith('2023')){
                console.log('date is enabled')
                break;
            } else {
                console.log('All Dates Disabled.')
            }
        }

        //I don't know why it didn't look through all the dates. I used the exact sibling and child axes.




    });
    


})