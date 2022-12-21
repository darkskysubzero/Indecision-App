//can resassign and redefine with var
var nameVar = "John";
var nameVar = "Mike";
console.log("nameVar : ",nameVar);

//cannot redefine with let
let nameLet = "Ali";
nameLet = "Alin";
console.log("nameLet : ",nameLet);

//cannot redefine or reassign with const
const nameConst = "Frank"; 
console.log("nameConst : ",nameConst);

//=======SCOPE DIFFERENCES===============
function getPetName(){
    var petName = "Hal";
    let petName2 = "Sal";
    const petName3 = "Qal";
    return petName;
}
//in scope
console.log('petName : ',getPetName());
//out of scope
//==> console.log(petName,petName2,petName3);

// Block Scoping=======================
var fullName = "Alin Sky";
if(fullName){
    var firstName = fullName.split(" ")[0];
    console.log(firstName); //Alin
}
console.log(firstName); //Alin
/*
    var = function scoped
    let = block scoped
    const = block scoped
*/

