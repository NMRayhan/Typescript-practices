let person: {
    pName: string,
    pAge: number,
    skill: string[]
}

person = {
    pName: "Abdullah",
    pAge: 30,
    skill: ["PHP", "laravel", "codeIfniter", "falcon", "drupal", "cakePHP"]
}
console.log('person Name ' + person.pName + '\n');
console.log('person Age ' + person.pAge);
console.log('Person Skills Are ' + person.skill);

let player: {
    playerName: string,
    salary: number,
    playerClub: {
        clubName: string[]
    }
}

player = {
    playerName: "Cristiano Ronaldo",
    salary: 23,
    playerClub: {
        clubName: ['Juventus F.C.', 'Real Madrid', 'Manchester United', 'Sporting Clube de Portugal']
    }
}
console.log(player.playerName + ', Club are he Played ' + player.playerClub.clubName);
