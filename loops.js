//print out 0-5 using console.log
let i = 0 //initialisation
console.log(0);
console.log(1);
//loops make it faster ,lesss repetitive
//for loop
for(let i=0; i<=5; i++) {
    console.log(i);
}
//for loops run on conditions/range
let r=0
for(let r=5; r>=5; r--); {
    console.log(r);
}


//add these numbers in an array using a loop
let numbers = [1,2,3,4,5]
let add = 0
for(let t=0; t<numbers.length; t++) {
    add += numbers[t];
    console.log(add);
}
//initialisation,ondition,increment/decrement
let sum=0
for(let u=0; u<numbers.length; u++ ){
    sum=sum+numbers[u]//sum+=numbers[u]

}
console.log(sum);
//while loop
let z = 0 
while(z<=5) {
    console.log(z);
    z++

}

//do while
let s = 0
do {
    console.log(s);
    s++
}
while (s<=5)

    //for off9used to loop throgh arrays mainly
    const number2 = [1,2,3,4,5]
    for ( q = 0; q< number2.length; q++) {
        const add = number2[q]+20;
        console.log(add);
    }
    for(const digit of number2) {
        console.log(digit);
    }
    //for of  loop with beans ,maize , loop that prints this on screen

    let cereals = ["beans", "maize", "nuts"]
    for(const grain of cereals) {
        console.log(grain);
    }

    const produceList = [{name:"beans",type:"legumes",weight:1000,cost:500000},
                         {name:"maize",type:"legumes",weight:2000,cost:700000},
                          {name:"nuts",type:"grain",weight:1500,cost:600000},
                        ]
                        
//loop that`$ to pt exact values
for(const produce of produceList) {
    console.log(`name:${produce.name},type:${produce.type},weight:${produce.weight}kg,cost:${produce.cost}Ugx`)
}