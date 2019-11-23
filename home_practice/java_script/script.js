var john ={
    calcAge : function(){
        john.age = 2019 - this.birthYear;
    },
    firstname:'John',
    lastname:'Smith',
    birthYear:'1993',
    family:['Aditya','Ron','Adhikari'],
    
};
john.calcAge();
console.log(john);