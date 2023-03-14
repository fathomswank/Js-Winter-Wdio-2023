// Due date: Mar-13 (eod)

// TC-1: Verify current temp is less than or equals to feel-like temp
/**
 * 1. Launch https://www.accuweather.com/
 * 2. Verify current-temp is in between 45 and 55
 */
const { expect } = require("chai");

describe('Verify Current Temp', () => {

    it('Locator strategy', async () => {

await browser.url('https://www.accuweather.com/');
await browser.pause(4000);

const currentTempLocator = "(//span[contains(@class, 'recent-location-temp')])[1]";
const currentTempElement = await $(currentTempLocator);
await browser.pause(2000);
let currentTemp = await currentTempElement.getText();
await browser.pause(2000);
currentTemp = Number(currentTemp);

expect (currentTemp < 55 && currentTemp > 45, 'Current Temp IS between those degrees!').to.be.false;
//expected answer to be false
    })

// TC-2: Verify error on empty login flow
/**
 * 1. Launch https:www.facebook.com/
 * 2. Click 'Log In' button
 * 3. Verify error msg is displayed
 *      The email or mobile number you entered isn’t connected to an account
 */
it('Verify error on empty login flow', async () => {
    await browser.url('https://www.facebook.com/');
    await browser.pause(1000);

    await $("//button[contains(text(), 'og In')]").click();
    await browser.pause(3000);

    const logInElementCheck = await $("//div[contains(text(), 'mobile')]");
    const placeHolderValue = await logInElementCheck.getText('placeholder');
    await browser.pause(3000);

    expect(placeHolderValue, 'Error Message is not displayed').to.be.equal("The email or mobile number you entered isn’t connected to an account. Find your account and log in.");
})

// TC-3: Verify the empty messenger login flow
/**
 * 1. Launch https:www.facebook.com/
 * 2. Click on 'Messenger' link
 * 3. Verify 'Keep me signed in' checkbox is NOT selected
 * 4. Click 'Log In' button
 * 5. Verify link -> "Find your account and log in" is displayed
 * 6. Verify 'Continue' button is enabled
 * 7. Verify 'Keep me signed in' checkbox is NOT selected
 * 8. Click 'Keep me signed in' checkbox
 * 9. Verify 'Keep me signed in' checkbox is selected
 * 
 */

it.only('Verify the empty messenger login flow', async () => {

    await browser.url('https://www.facebook.com/');
    await browser.pause(1000);
    await $("//a[text()='Messenger']").click();
    await browser.pause(2000);

    const keepSignedInCheckbox = await $('//input[@type="checkbox"]');
    const checkBoxOn = await keepSignedInCheckbox.isSelected();
    expect(checkBoxOn, 'Checkbox is selected').to.be.false;

    const loginBtn = await $('#loginbutton');
    await loginBtn.click();
    await browser.pause(3000);

    const findAccountErrorText = await $('//div[starts-with(text(),"The email")]');
    const findAccountMsgDisplayed = findAccountErrorText.getText('Accoung Msg')
    await browser.pause(3000);
    expect (findAccountMsgDisplayed, 'Msg is not displayed').to.be.equal("The email or mobile number you entered isn’t connected to an account. ");

    const continueBtn = await $('button[type*=sub]');
    const contBtnEnabled = continueBtn.isEnabled();
    expect (contBtnEnabled, 'Continue button not enabled').to.be.true;

    const secCheckbox = await $('//input[@type="checkbox"]');
    const secCheckboxSelected = await secCheckbox.isSelected();
    expect (secCheckboxSelected, 'Checkbox is selected').to.be.false;

    const checkedBox = await $('//input[@type="checkbox"]');
    await checkedBox.click();
    await browser.pause(2000);
    
    const checkedBoxSelect = await $('//input[@type="checkbox"]');
    const checkboxSelectedTrue = await checkedBoxSelect.isSelected();
    expect (checkboxSelectedTrue, 'Checkbox is NOT selected').to.be.true
    
})



})










