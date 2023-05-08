const {readFile} = require ('../01-read-file/index');
const chai = require('chai');
var expect=chai.expect;
var assert = chai.assert;


describe('read file function',()=>{
    it('check stack and readFile result', function (){
        const config = require('chai').config;
        config.includeStack = true;
        readFile();
        assert.equal(readFile(), 'Нет хуже причины для выбора имени с, чем та, что имена a и b уже заняты.')
    });
    
});

