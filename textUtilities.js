// Installation instructions
// npm init
// npm install chai --save-dev;

var expect = require('chai').expect;

//var chai = require('chai');
//var expect = chai.expect;

expect(true).to.be.true;

function titleCase (str) {
    //return x;
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

expect(titleCase('the great mouse detective')).to.be.a('string');

expect(titleCase('the great mouse detective')).to.equal('The Great Mouse Detective');

