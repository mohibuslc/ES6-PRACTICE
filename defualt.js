// function add (num1 , num2){

//     if( num2 == undefined){

//         num2 = 0;
//     }
//     return num1 + num2 ;

// }

// const total = add( 78);

// console.log(total);


function add(num1 , num2 = 13){

    return num1 + num2 ;

}

const total = add(12 , 1);

console.log(total);


