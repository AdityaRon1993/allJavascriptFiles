var john = {
    fullname : 'John Smith',
    mass: 78,
    height : 1.60 ,
    cbmi : function(){
        this.bmi = this.mass/(Math.pow(this.height,2));
        return this.bmi;
    } 
};
var mark={
    fullname : 'Mark Johnson',
    mass : 90,
    height : 1.70,
    cbmi : function (){
        this.bmi = this.mass/(Math.pow(this.height,2));
        return this.bmi;
    }
};
john.cbmi();
mark.cbmi();
console.log(john.bmi);
console.log(mark.bmi);

console.log( john.bmi > mark.bmi ? 'John\s ' + john.bmi +' BMI is larger than Mark\'s BMI' : john.bmi === mark.bmi ? 'John and Mark\'s BMI is equal and is equal to ' + john.bmi : 'Mark\'s ' + mark.bmi +' BMI is larger than John\'s');
