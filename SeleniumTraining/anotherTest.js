const {By,Key,Builder} = require("selenium-webdriver");
// const assert = require("assert");
// const chromeD = require("chromedriver");
const should = require("chai").should();

//Some variables
let searchString = "Automation testing with Selenium";
let url = "https://www.selenium.dev/selenium/web/web-form.html";

//describe block

describe("add ANOTHER todo tests", function(){

//it block
        it("succesfully adds ANOTHER todo application", async function(){
                //Launch Browser
                let driver = await new Builder().forBrowser("chrome").build();
        
                //To fetch some url.
                await driver?.get("https://www.selenium.dev/selenium/web/web-form.html");
                
                // To send a search query by passing the value in searchString.
                await driver
                ?.findElement(By?.css('[name="my-file"]'))
                ?.sendKeys("C:\\Users\\alan_\\Downloads\\Peepo.png");

                //assertion

                let fileName = await driver
                ?.findElement(By?.css(' [name="my-file"]'))
                ?.getAttribute("value")
                .then(function(value){
                        return value.match(/(?<=[\w\\])([\w])+(?=\.)/g)[0]
                });

        
                // //assertion Node

                // assert.strictEqual(todoText, "Three")

                //assert using chai should
                fileName.should.include("Peepo")

                //Something to do 
                await new Promise(res => setTimeout(res, 10000));
                let title = await driver.getTitle();
                console.log('Title is :',title);

                console.log('File name is :',fileName);
        
                //Close the browser
                await driver.quit();
                
        });

});

 
 
