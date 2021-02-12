let firstName: String = "Nur Mohammad";
let LastName: String = "Rayhan";

function fullName(firstName: String, lastName: String):String {
    return firstName+' '+lastName
}

let result = fullName(firstName, LastName);
console.log(result);

function submit(){
    const input = document.getElementById('input').value;
}
