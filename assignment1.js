'use strict'
var myName1='Jeff'
var myHeight1=10
var myweight1 =60
var myName2='Todd'
var myHeight2 =20

var myweight2 =70
if(myweight1 > 0 && myHeight1> 0){
var finalBmi = myweight1/(myHeight1/100*myHeight1/100)
console.log(` the weight of ${myName1} is ${myweight1} and height is ${myHeight1} then BMI of ${myName1} is ${finalBmi}`)

}
if(myweight2 > 0 && myHeight2> 0){
    var finalBmi2 = myweight2/(myHeight2/100*myHeight2/100)
    console.log(` the weight of ${myName2} is ${myweight2} and height is ${myHeight2} then BMI of ${myName2} is ${finalBmi2}`)
    
    }
    if(finalBmi > finalBmi2)
    {
        console.log(" Jeff's BMI is greater than Todd's BMI")
    }