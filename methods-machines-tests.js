// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by methods-machines.js.
import { name as packageName } from "meteor/methods-machines";

// Write your tests here!
// Here is an example.
Tinytest.add('methods-machines - example', function (test) {
  test.equal(packageName, "methods-machines");
});
