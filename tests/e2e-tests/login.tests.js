var origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
    var args = arguments;

    // queue 100ms wait
    origFn.call(browser.driver.controlFlow(), function() {
        return protractor.promise.delayed(200);
    });

    return origFn.apply(browser.driver.controlFlow(), args);
};
describe('Clicking on the login button ', function() {
    var username, password, loginButton,
    orderList, query, OrderButton, ReportButton, showReportButton;

    beforeEach(function() {
        browser.get('/#/signin');
        username = element(by.model('credentials.username'));
        password = element(by.model('credentials.password'));
        query = element(by.model('query'));
        orderCust = element(by.repeater('order in orders').row(0));
        loginButton = element(by.id('login'));
        OrderButton = element(by.id('orderBtn'));
        ReportButton = element(by.id('reportBtn'));
        showReportButton = element(by.id('showReportBtn'));

         // startDate = element(by.id('startDate'));
         // endDate = element(by.id('endDate'));

    });

    it('should validate the credentials for a successful login', function() {
        // TODO: test successful login

        username.sendKeys('admin');
        password.sendKeys('opos1234');

        loginButton.click().then(function() {
            expect(browser.getLocationAbsUrl()).toMatch('/view');

            console.log(browser.getLocationAbsUrl());
            // var dinners = element.all(by.repeater('dinner in vm.dinners'));
            // expect(dinners.count()).toEqual(3);
        });
    });

    it('should display a popup for an unsuccessful login', function() {
        // TODO: test unsuccessful login
        // browser.get('/#/view');

        username.sendKeys('Aquib');
        password.sendKeys('oposjhjkhdsfj');
        loginButton.click().then(function() {
        expect(browser.getLocationAbsUrl()).toMatch('/signin');

            var popup = element(by.id('validation'));
        expect(popup.isDisplayed()).toBeTruthy();
        });
    });


    it('After successful login should be able to access orderList if orderList button is clicked', function() {
        // TODO: test successful login

        username.sendKeys('admin');
        password.sendKeys('opos1234');

        loginButton.click();
        OrderButton.click().then(function(){

        expect(browser.getLocationAbsUrl()).toMatch('/order');
        });
    });


    it('After successful access to orderList, should be able to search', function() {
        // TODO: test successful login

        username.sendKeys('admin');
        password.sendKeys('opos1234');

        loginButton.click();
        OrderButton.click();

        query.sendKeys('erin');
       

       console.log(orderCust);
        (orderCust).isDisplayed();


    });

    it('After successful login should be able to access report if report button is clicked', function() {
        // TODO: test successful login

        username.sendKeys('admin');
        password.sendKeys('opos1234');

        loginButton.click();
        ReportButton.click().then(function(){

        expect(browser.getLocationAbsUrl()).toMatch('/report');
        });
    });

    it('After accessing report if proper date range is selected, report should display', function() {
        // TODO: test successful login

        username.sendKeys('admin');
        password.sendKeys('opos1234');

        loginButton.click();
        ReportButton.click();

        startDate.sendKeys('Oct-03-2015');
        endDate.sendKeys('Oct-24-2015');

       showReportButton.click();

    });


});

