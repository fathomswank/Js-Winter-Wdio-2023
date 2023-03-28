// Due date: Mar 15 (eod)

const { expect } = require("chai");

// TC-1: Verify the current date is select by default in Sign Up dropdown
/**
 * 1. Launch facebook.com
 * 2. Click on Create New Account button
 * 3. Verify current date is displayed in the birthdate dropdowns.
 */
it('Verify the empty messenger login flow', async () => {

    await browser.url('https://www.facebook.com/');
    await browser.pause(2000);

    const signUpButton = await $('//a[contains(text(), "ccount")]');
    signUpButton.click();
    await browser.pause(2000);

    let monthSelected = await $('//option[text()="3"]');
    let monthOnDisplay = await monthSelected.getText();
    monthOnDisplay = '0' + monthOnDisplay
    await browser.pause(1000);

    const daySelected = await $('//option[text()="16"]');
    const dayOnDisplay = await daySelected.getText();
    await browser.pause(1000);


    const yearSelected = await $('//option[text()="2023"]');
    const yearOnDisplay = await yearSelected.getText();

    await browser.pause(1000);

    let entireDateToday = monthOnDisplay + '-' + dayOnDisplay + '-' + yearOnDisplay;

    const moment = require('moment');
    let today = moment();
    today = today.format('MM-DD-YY');

    console.log(entireDateToday === today);

    //expect wasn't working so I had to just console.log the last bit of my code. I need help with this one.

})

// Hint:
/**
 * get current date using moment-library - A
 * get default date selected in the dropdown - B
 * expect(A, '').to.equals(B)
 * 
 */


// TC-2: Verify the travelers count on homepage
/**
 * 1. Launch hotels.com
 * 2. Make Adults=4 in Room-1
 * 3. Click Add another room
 * 4. Make Adults=3 in Room-2
 * 5. Click on Done button
 * 6. Verify total-travalers is equals to the number of adults mentioned in rooms
 * 
 */


it.only('Verify the travelers count', async () => {

    await browser.url('https://www.hotels.com/');
    await browser.pause(2000);

    const roomBtn = await $('(//button[contains(text(), "")])[7]');
    await roomBtn.click();
    await browser.pause(1000);

    const addInRoomOne = await $("(//span[contains(text(), '')])[9]");
    await addInRoomOne.click();
    await addInRoomOne.click();
    await browser.pause(2000);

    const addAnotherRoom = await $('(//button[contains(text(), "")])[12]');
    await addAnotherRoom.click();
    await browser.pause(1000);

    const addInRoomTwo = await $("(//span[contains(text(), '')])[16]");
    await addInRoomTwo.click();
    await addInRoomTwo.click();
    await browser.pause(2000);

    await $('(//button[contains(text(), "")])[19]').click();
    await browswer.pause(1000);

    const checkCount = await $("(//span[contains(text(), '')])[6]")
    await browser.pause(1000);

    const travelersCountOnWeb = await checkCount.getText();
    expect(travelersCountOnWeb.endsWith("7 travelers, 2 rooms"), 'Travelers and rooms count are not as expected').to.be.true;
    //expect(checkCount, 'Not as Expected').to.be.equal('7 travelers, 2 rooms');

    // "Travelers: 7 travelers, 2 rooms"    "7 travelers, 2 rooms"

})
