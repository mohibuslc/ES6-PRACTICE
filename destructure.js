
// destructuring  of Data ;


const person = { name: 'Mohammad Kalam' , Address: ' Tillaghore' , Friends:['Jamal', 'Karim','Tina'], phone:'01717191467', Passport: 'EG098451'};

const{name , phone, Address} = person;

//console.log(name , phone , Address);


// complex way to Destructors Data :

const complexObject = {


    name: 'Kamal Khan',

    info : {

        address : 'Tillaghor Sylhet',
        phone:'01717191467',
        leder : ' Tigher khan '
 
 
    }
};


const {leder} = complexObject.info;

//console.log(leder);


// Destructors Data from Array ; 



const friendsList= ['Shakib Khan ', 'Kamal Khan', 'Jamal Khan ','Tina Khan ','Noor Khan'];

const[firstFriends, secondfriends, ...restOffriends] = friendsList ;

console.log(restOffriends);
