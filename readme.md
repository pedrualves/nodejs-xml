# Simple and rustic example to consume old soap webservices with nodejs

## Sample XML

```xml
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:hol="http://www.holidaywebservice.com/HolidayService_v2/">
   <soapenv:Header/>
   <soapenv:Body>
      <hol:GetHolidaysAvailable>
         <hol:countryCode>UnitedStates</hol:countryCode>
      </hol:GetHolidaysAvailable>
   </soapenv:Body>
</soapenv:Envelope>
```

## Endpoint:

http://www.holidaywebservice.com/HolidayService_v2/HolidayService2.asmx

## WSDL:

http://www.holidaywebservice.com/HolidayService_v2/HolidayService2.asmx?WSDL

## The native way:

node native.js

## The request way:

npm module: https://github.com/request/request

```javascript
   npm install request

   node request.js
```

## The unirequest way:

npm module: https://github.com/Mashape/unirest-nodejs

```javascript
   npm install unirequest
   
   node unirequest
```
