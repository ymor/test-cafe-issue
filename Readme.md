This is a contrived example to demonstrate that testcafe is corrupting a large javascript file when using the hammerhead proxy

Run `npm i`
Run `npm run test:firefox` When it hits the debugger check the network log and you will see the load of vendor.js has failed (Loading module from “http://192.168.50.31:50793/OAfKkC2hj*Lj0fyYkMD!s!utf-8/http://localhost:8080/vendor.js” was blocked because of a disallowed MIME type (“text/html”).)

If you load `http://localhost:8080` directly in firefox it loads the vendor.js file without issue

Run `npm run test:chrome`When it hits the debugger check the network log and you will see the load of vendor.js has succeeded
