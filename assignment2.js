var Heaths=[89,120,103]
var Zane=[ 116,94,123]
var text1=0
var text=0
for(let i=0;i<Heaths.length;i++)
{
    text += Heaths[i] ;
}
for(let j=0;j<Zane.length;j++)
{
    text1 += Zane[j] ;
}
var average1=text/Heaths.length;
var average2=text1/Zane.length;

console.log(average1,average2)
average1 >= average2 ? console.log("Heath's is winner") : console.log("Zane is winner")
var Mariah=[97,134,105]
var text2=0
for(let j=0;j<Mariah.length;j++)
{
    text2 += Mariah[j] ;
}
var average3=text2/Mariah.length;
if(average1> average2 && average1> average3)
{
console.log("Heath's is winner")
}
else if(average2>average3)
{
    console.log("Zane is winner")
}
else{
    console.log("Mariah is winner")
}


