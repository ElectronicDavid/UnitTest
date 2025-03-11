import {assert ,expect, should} from 'chai'; 
import {Hello, Suma, canDrinkInCol, orderArry,isPalindrome}  from '../apps.js'; 
should(); 

describe('Units Testing with Chai', function(){
    it('Returning Hello with Assert', function(){
        assert.equal(Hello(),'hello');
    })

    it('Returning Hello with expect', function(){
        expect(Hello()).to.equal('hello');
    })

    it('Returning Hello with Should', function(){
        Hello().should.equal('hello');
    })

    it('Sum should be 8a with assert', function(){
        assert.equal(Suma(4,4),8);
    })

    it('Sum should be 8a with should', function(){
        assert.equal(Suma(4,4),8);
    })

    it('Should return True if the age is under 18', function(){
        expect(canDrinkInCol(17)).to.equal(false);
    })

    it('Should return True if the age is above 18', function(){
        expect(canDrinkInCol(100)).to.equal(true);
    })

    it('Should return the ordered array ', function(){
        let numbers = [5, 3, 9, 1, 4];
        orderArry(numbers).should.not.equal([ 1, 3, 4, 5, 9 ]);
    })

    it('Anita lava la tina should return true', function(){
        assert.equal(isPalindrome("Anita lava la tina"),true);
    })

    it('Hello World should return false', function(){
        assert.equal(isPalindrome("Hello World"),false);
    })

})