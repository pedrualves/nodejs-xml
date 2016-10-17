'use strict';

let request = require("request"),
    options = {
        method: 'POST',
        url: 'http://www.holidaywebservice.com/HolidayService_v2/HolidayService2.asmx',
        headers: {
            'cache-control': 'no-cache',
            'content-type': 'text/xml; charset=utf-8'
        },
        body: '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:hol="http://www.holidaywebservice.com/HolidayService_v2/">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <hol:GetHolidaysAvailable>\n         <hol:countryCode>UnitedStates</hol:countryCode>\n      </hol:GetHolidaysAvailable>\n   </soapenv:Body>\n</soapenv:Envelope>'
    };

request(options, function(error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
});
