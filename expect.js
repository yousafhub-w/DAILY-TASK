var expect = function(val) {
    
 return {
    toBe: function (otherValue) {
        if(val !== otherValue){
            throw "Not Equal";
        } else {
            return true
        }
    },
    notToBe: function  (otherValue){
        if(val === otherValue) throw "Equal"
        else return true
    }
 }
    
};
console.log( (expect(5).toBe(5)));
