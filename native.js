'use strict';

let http = require("http"),
    options = {
    "method": "POST",
    "hostname": "www.holidaywebservice.com",
    "port": null,
    "path": "/HolidayService_v2/HolidayService2.asmx",
    "headers": {
        "content-type": "text/xml; charset=utf-8",
        "cache-control": "no-cache"
    }
};

let req = http.request(options, function(res) {
    let chunks = [];

    res.on("data", function(chunk) {
        chunks.push(chunk);
    });

    res.on("end", function() {
        var body = Buffer.concat(chunks);
        console.log(body.toString());
    });
});

req.write("<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:hol=\"http://www.holidaywebservice.com/HolidayService_v2/\">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <hol:GetHolidaysAvailable>\n         <hol:countryCode>UnitedStates</hol:countryCode>\n      </hol:GetHolidaysAvailable>\n   </soapenv:Body>\n</soapenv:Envelope>");
req.end();
