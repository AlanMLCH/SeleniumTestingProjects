const {By,Key,Builder} = require("selenium-webdriver");
const assert = require("assert");
// const chromeD = require("chromedriver");
// const should = require("chai").should();
 
async function example(url, browser){
        //Some variables
       let searchString = "Automation testing with Selenium";
 
       //Launch Browser
       let driver = await new Builder().forBrowser(browser).build();
 
        //To fetch some url.
        await driver.get(url);
            
        //To send a search query by passing the value in searchString.
        // await driver.findElement(By.css('.form-control[name="my-textarea"]')).sendKeys(searchString,Key.RETURN);

        //assertion

        let todoText = await driver.findElement(By.css('[name="my-select"] [selected]')).getText().then(function(value){
                return value
        });
      
        //assertion Node

        assert.strictEqual(todoText, "Three")

        //assert using chai should
        // todoText.should.equal("Three");

        //Something to do 
        await new Promise(res => setTimeout(res, 10000));
        let title = await driver.getTitle();
        console.log('Title is:',todoText);
 
        //Close the browser
        await driver.quit();
 
}
 
example('https://www.selenium.dev/selenium/web/web-form.html', 'chrome')