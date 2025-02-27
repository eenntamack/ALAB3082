let containerRadius = 5;
const PI = 3.1415;
const area = PI * containerRadius * containerRadius;
const plantArea = 0.8;
let initialAmount = 20;
let totalArea;
let week = 0;
let extraSpace = 0;

//handling for 1 week

week += 1;
totalArea = (initialAmount * plantArea) * ( 2 ** week ); 
console.log(totalArea);
console.log(area);

if(totalArea > area){
      console.log(`The total plant area exceeds the containter with ${totalArea}sq m , so the plants must be ` + 'Pruned');
}
else if(totalArea >= (0.5 * area) && week <= (0.8 * area))
{
    console.log(`The total plant area is ${totalArea}sq m , so the plants must be ` + 'Monitored');
}else if(totalArea < (0.5 * area))
{
    console.log(`The total plant area is ${totalArea}sq m , so more plants must be ` + 'Planted');
}

//handling for 2 weeks

week += 1;
totalArea = (initialAmount * plantArea) * ( 2 ** week ); 
console.log(totalArea);
console.log(area);

if(totalArea > area){
      console.log(`The total plant area exceeds the containter with ${totalArea}sq m , so the plants must be ` + 'Pruned');
}
else if(totalArea >= (0.5 * area) && week <= (0.8 * area))
{
    console.log(`The total plant area is ${totalArea}sq m , so the plants must be ` + 'Monitored');
}else if(totalArea < (0.5 * area))
{
    console.log(`The total plant area is ${totalArea}sq m , so more plants must be ` + 'Planted');
}

//handling for 3 weeks

week += 1;
totalArea = (initialAmount * plantArea) * ( 2 ** week ); 
console.log(totalArea);
console.log(area);

if(totalArea > area){
      console.log(`The total plant area exceeds the containter with ${totalArea}sq m , so the plants must be ` + 'Pruned');
}
else if(totalArea >= (0.5 * area) && week <= (0.8 * area))
{
    console.log(`The total plant area is ${totalArea}sq m , so the plants must be ` + 'Monitored');
}else if(totalArea < (0.5 * area))
{
    console.log(`The total plant area is ${totalArea}sq m , so more plants must be ` + 'Planted');
}


//if the scientists started with 100 plants and planted for 10 weeks how many additional space is needed?

week = 10;
initialAmount = 100;

totalArea = (initialAmount * plantArea) * (2 ** week);
extraSpace += (totalArea - area);


console.log(`After ${week} weeks the total area would be ${totalArea}sq m which would require about ${extraSpace}sq m of extra space`);

totalArea /= PI;

console.log('The radius of the the plants would be about 161.5 sq m ');

//Handling amount of plants exceeding 20
try{
    if(initialAmount < 20){
        console.log('lets start planting');
    }else{
        throw "Too Many Plants";
    }
}catch(error){
    console.log(error);
}

