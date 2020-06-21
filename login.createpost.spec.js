describe('Verify vaild login and creation of new post', () => {
        jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 2000;
        browser
              .manage()
              .window()
              .maximize();
        var EC = protractor.ExpectedConditions;
        browser.waitForAngularEnabled(false);
        browser.driver.get('https://app.gethyphen.com/signin');
        browser.driver.sleep(5000);


        it("Verify login with vaild credientials", () => {
        

                // Enter vaild email in email field 
                browser.wait(EC.elementToBeClickable($('[placeholder = "your@work.com"]')), 6000);
                element(by.css('[placeholder = "your@work.com"]')).sendKeys('hyphen_admin@acmetest.com');
                // Click on Send me a verification code buuton
                browser.wait(EC.elementToBeClickable($('.ladda-label', 'Send me a verification code')), 6000);
                element(by.cssContainingText('.ladda-label', 'Send me a verification code')).click();
                // Enter vaild password in password field 
                browser.wait(EC.elementToBeClickable($('[placeholder = "Verification code"]')), 6000);
                element(by.css('[placeholder = "Verification code"]')).sendKeys('34067');
                // Click on Login button 
                browser.wait(EC.elementToBeClickable($('.hyphenButton', 'Log In')), 6000);
                element(by.cssContainingText('.hyphenButton', 'Log In')).click();
                // Varify landling screen
                browser.driver.sleep(4000);
                browser.wait(EC.elementToBeClickable($('.hyphenButton','Create new post')), 6000);
                expect(element(by.cssContainingText('.hyphenButton','Create new post')).isDisplayed()).toBe(true);

        })    

        it("Verify creation of new post", () => {
                // Click on Create new post 
                element(by.cssContainingText('.hyphenButton','Create new post')).click();
                // Click on Open button
                browser.wait(EC.elementToBeClickable($('.hyphenButton','OPEN')), 6000);
                element(by.cssContainingText('.hyphenButton', 'OPEN')).click();
                browser.driver.sleep(2000);
                // Click on dropdown menu
                browser.wait(EC.elementToBeClickable($('.Select-arrow')), 6000);
                element(by.className('Select-arrow')).click();
                browser.driver.sleep(2000);  
                // Select from dropdrown
                element(by.cssContainingText('.Select-option', 'All')).click();
                browser.driver.sleep(2000); 
                // Click on select button
                browser.wait(EC.elementToBeClickable($('.hyphenButton','Select')), 6000);
                element(by.cssContainingText('.hyphenButton', 'Select')).click();
                browser.driver.sleep(2000); 
                // Input text
                browser.wait(EC.elementToBeClickable($('[placeholder = "Type your question / opinion / feedback here"]')), 6000);
                element(by.css('[placeholder = "Type your question / opinion / feedback here"]')).sendKeys('Test Runner Test Runner Test Runner');
                browser.driver.sleep(2000); 
                // Click on publish post button
                browser.wait(EC.elementToBeClickable($('.hyphenButton','Publish post')), 6000);
                element(by.cssContainingText('.hyphenButton', 'Publish post')).click();
                browser.driver.sleep(2000); 
                // Varify creation of post 
                browser.wait(EC.elementToBeClickable($('.questionText','Test Runner Test Runner Test Runner')), 6000);
                expect(element.all(by.cssContainingText('.questionText','Test Runner Test Runner Test Runner')).get(1).getText()).toBe('Test Runner Test Runner Test Runner');
                browser.driver.sleep(3000); 

        })    


})