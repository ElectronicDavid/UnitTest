import {assert ,expect, should} from 'chai'; 
import {Hello, Suma, isPalindrome}  from '../apps.js'; 
should(); 

describe('App', function(){
    it('Assert', function(){
        assert.equal(Hello(),'hello');
    })

    it('Expect', function(){
        expect(Hello()).to.equal('hello');
    })

    it('Should', function(){
        Hello().should.equal('hello');
    })

    it('Should be 8', function(){
        assert.equal(Suma(4,4),8);
    })

    it('Should ', function(){
        assert.equal(Suma(4,4),8);
    })

})