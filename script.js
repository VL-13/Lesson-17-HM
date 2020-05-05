// Array operations
let styles=["Jazz", "Blues"];
console.log( styles );

styles.push("Rock-n-Roll");
console.log( styles );

styles[1]= "Classic";
console.log( styles );

alert( styles.shift() );
console.log( styles );

styles.unshift("Rap", "Reggae");
console.log( styles );

//Object operations
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric() {
    for (let key in menu){
        if (typeof menu[key] == 'number') {
        menu[key] *= 2;
        }
    }
}
multiplyNumeric(menu);
console.log( menu );