var unirest = require("unirest");

var req = unirest("POST", "http://www.holidaywebservice.com/HolidayService_v2/HolidayService2.asmx");

req.headers({
    "cache-control": "no-cache",
    "content-type": "text/xml; charset=utf-8"
});

req.send("<soapenv:Envelope xmlns:soapenv=\"http://schemas.xmlsoap.org/soap/envelope/\" xmlns:hol=\"http://www.holidaywebservice.com/HolidayService_v2/\">\n   <soapenv:Header/>\n   <soapenv:Body>\n      <hol:GetHolidaysAvailable>\n         <hol:countryCode>UnitedStates</hol:countryCode>\n      </hol:GetHolidaysAvailable>\n   </soapenv:Body>\n</soapenv:Envelope>");

req.end(function(res) {
    if (res.error) throw new Error(res.error);

    console.log(res.body);
});
