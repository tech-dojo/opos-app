ONLINE-POS mobile app
The Online-POS mobile app is a hybrid app built with the Ionic framework. This app uses the API from the OPOS web application. OPOS is a three in one web application for restaurants that serves as a restaurant website, a point-of-sale, and also an online ordering system.
This mobile app provides restaurant owners with an easy and quick access to the order list and individual orders from their restaurant. It also provides an easy access to the reporting system of the POS part which shows the total sale of items between any two dates.

Fig: Sign In Page Fig: Home Page Fig: Report Page Fig: Order List Page Fig: Single Order Page

How To Setup The App
First, you will need to setup the Ionic framework, you can refer to https://github.com/driftyco/ionic/blob/master/README.md for further help.
Then, you will need to clone this repository.
There you go, it's that easy, thanks to the Ionic team and our hard work.
How To Run The App
In order to run the app, you can refer to http://ionicframework.com/getting-started/ for device specific options, also you can run the command
$ ionic serve
to run it in the browser.
The configuration is pretty straightforward, for this specific app we need to use Chrome with the --disable-web-security setting, otherwise we won't be able to do HTTP requests to the OPOS server.
To run Chrome with the disabled-web-security setting, you need to run the command
On OSX:
 $ open -a Google\ Chrome --args --disable-web-security
On Windows:
chrome.exe --user-data-dir="C:/Temp/Chrome" --disable-web-security
Test Code
Our app has both unit tests and end to end tests. To run them you need to set up Karma and Jasmine for running the unit tests and Protractor and Jasmine to run the end-to-end tests.
For instruction on how to setup Karma and Jasmine, please refer to http://gonehybrid.com/how-to-write-automated-tests-for-your-ionic-app-part-2/
For instructions on how to setup Protractor and Jasmine please refer to
http://gonehybrid.com/how-to-write-automated-tests-for-your-ionic-app-part-3/ 
To run the Unit tests, go into the tests folder and then run the command
$ karma start unit-tests.conf.js
To make changes in the unit test code, go into tests folder and then into the Controllers folder and make changes in the controllers.tests.js file.
To run the End-to-End tests, go to the root of our Ionic app and fire it up:
$ ionic serve --nobrowser
then go into the tests folder and then go into e2e-tests folder and then run the command
$ protractor e2e-tests.conf.js
To make changes in the end-to-end test code you need to go to tests folder and then into the e2e-tests folder and make changes in the login.tests.js file.
Contact
Email us at admin@tech-dojo.org for the username and password of this app, and any other queries.
License
MIT License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.