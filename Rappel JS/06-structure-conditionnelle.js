const isOk = false;

// if (isOk) {
    
//     console.log("C'est OK");
    
// }


// if (isOk) {
//     console.log("C'est OK");
// }
// else {
//     console.log("Ce n'est pas OK");
// }



const traffic = "orange";

// if (traffic == "green") {
//     console.log('on passe');
// }
// else if (traffic == "orange") {
//     console.log("on s'arrete");
// }
// else if (traffic == "red") {
//     console.log("On STOP");
// }
// else {
//     console.log("c'est la merde .....");
// }


switch (traffic) {
    case "green" : console.log('on passe'); break;
    case "orange": console.log("on s'arrete"); break;
    case "red"   : console.log("On STOP"); break;
    default      : console.log('on passe');
}
