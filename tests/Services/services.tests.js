describe('Chats Unit Tests', function(){
    var authentication;
    beforeEach(module('starter.services'));

    beforeEach(inject(function (Authentication) {
        authentication = Authentication;
    }));

});