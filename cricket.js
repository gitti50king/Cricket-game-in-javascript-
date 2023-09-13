// function generateRandNum() {
//     let randNum = Math.floor(Math.random() * 150) + 1

//     if (randNum > 0 && randNum <= 40) {
//         return 1
//     }
//     else if (randNum > 40 && randNum <= 70) {
//         return 2
//     }
//     else if (randNum > 70 && randNum <= 75) {
//         return 3
//     }
//     else if (randNum > 75 && randNum <= 90) {
//         return 4
//     }
//     else if (randNum > 90 && randNum <= 100) {
//         return 6
//     }
//     else if (randNum > 100 && randNum <= 113) {
//         return 'out'
//     }
//     else {
//         return 0
//     }
// }

// function printPlayers(team) {
//     for (let i = 0; i < 10; i++) {
//         console.log(team.players[i].name)
//     }
// }

// function playball() {
//     return generateRandNum()
// }

// // randNum = generateRandNum()
// // console.log(randNum)

// class Team {
//     constructor(name, players, runs) {
//         this.name = name
//         this.runs = runs
//         this.players = players
//     }
// }

// class Player {
//     constructor(name, runs, wickets) {
//         this.name = name
//         this.runs = runs
//         this.wickets = wickets
//     }
// }

// const virat = new Player('virat', 0, 0)
// const roshitSharma = new Player('Rohit Sharma', 0, 0)
// const msDhoni = new Player('MS Dhoni', 0, 0)
// const hardikPandya = new Player('hardikPandya', 0, 0)
// const bumrah = new Player('bumrah', 0, 0)
// const rahul = new Player('rahul', 0, 0)
// const jadeja = new Player('jadeja', 0, 0)
// const pant = new Player('pant', 0, 0)
// const shami = new Player('shami', 0, 0)
// const chahal = new Player('chahal', 0, 0)

// const team1 = new Team('india', [virat, roshitSharma, msDhoni, hardikPandya, bumrah, rahul, jadeja, pant, shami, chahal], 0)

// const travis = new Player('travis', 0, 0)
// const marsh = new Player('marsh', 0, 0)
// const smith = new Player('smith', 0, 0)
// const warner = new Player('warner', 0, 0)
// const marnus = new Player('marnus', 0, 0)
// const alex = new Player('alex', 0, 0)
// const stoinis = new Player('stoinis', 0, 0)
// const sean = new Player('sean', 0, 0)
// const ashton = new Player('ashton', 0, 0)
// const mitchell = new Player('mitchell', 0, 0)

// const team2 = new Team('australia', [travis, marsh, smith, warner, marnus, alex, stoinis, sean, ashton, mitchell], 0)

// console.log(team1.name.toUpperCase())
// printPlayers(team1)
// console.log('')
// console.log('vs')
// console.log('')
// console.log(team2.name.toUpperCase())
// printPlayers(team2)

// let user_team = parseInt(prompt('choose your team: 1 for team1 and 2 for team2: '))
// let choice = prompt('You choose to: "bat" or "ball"? enter b for bat and ba for ball')
// let playerCount = 0
// let totalPlayerRuns = 0

// if (user_team === 1) {
//     user_team = team1
//     console.log(' ')
//     console.log(user_team.name)
//     if (choice === 'b') {
//         for (let i = 0; i < 20; i++) {
//             for (let i = 0; i < 6; i++) {
//             let ballRun = playball()
//                 if (ballRun !== 'out') {
//                     totalPlayerRuns += ballRun
//                 }
//                 else {
//                     if(playerCount !== 10){
//                         team1.runs += totalPlayerRuns
//                         team1.players[playerCount].runs = totalPlayerRuns;
//                         totalPlayerRuns = 0
//                         playerCount += 1;
//                     }
//                     else{
//                         break;
//                     }

//                 }

//             }
//             if(playerCount === 10){
//                 console.log('all out')
//                 break;
//             }
//         }

//         totalPlayerRuns = 0
//         playerCount = 0

//         for (let i = 0; i < 20; i++) {
//             for (let i = 0; i < 6; i++) {
//                 let ballRun = playball()
//                 if (ballRun !== 'out') {
//                     totalPlayerRuns += ballRun
//                 }
//                 else {
//                     if(playerCount !== 10){
//                         team2.runs += totalPlayerRuns
//                         team2.players[playerCount].runs = totalPlayerRuns;
//                         totalPlayerRuns = 0
//                         playerCount += 1;
//                     }
//                     else{
//                         break;
//                     }

//                 }

//             }
//             if (playerCount === 10){
//                 console.log('all out')
//                 break;
//             }
//         }
//     }
//     else if (choice === 'ba'){
//         for (let i = 0; i < 20; i++) {
//             for (let i = 0; i < 6; i++) {
//                 let ballRun = playball()
//                 if (ballRun !== 'out') {
//                     totalPlayerRuns += ballRun
//                 }
//                 else {
//                     if(playerCount !== 10){
//                         team2.runs += totalPlayerRuns
//                         team2.players[playerCount].runs = totalPlayerRuns;
//                         totalPlayerRuns = 0
//                         playerCount += 1;
//                     }
//                     if(playerCount === 10){
//                         break;
//                     }
//                 }

//             }
//         }

//         totalPlayerRuns = 0
//         playerCount = 0

//         for (let i = 0; i < 20; i++) {
//             for (let i = 0; i < 6; i++) {
//                 let ballRun = playball()
//                 if (ballRun !== 'out') {
//                     totalPlayerRuns += ballRun
//                 }
//                 else {
//                     if (playerCount !== 10){
//                         team1.runs += totalPlayerRuns
//                         team1.players[playerCount].runs = totalPlayerRuns;
//                         totalPlayerRuns = 0
//                         playerCount += 1;

//                     }
//                     if(playerCount === 10){
//                         break;
//                     }
//                 }

//             }
//             if(playerCount === 10){
//                 console.log('all out')
//                 break;
//             }
//         }
//     }
// }
// else if (user_team === 2) {
//     user_team = team2
//     user_team = team1
//     console.log(' ')
//     console.log(user_team.name)
//     if (choice === 'b') {
//         for (let i = 0; i < 20; i++) {
//             for (let i = 0; i < 6; i++) {
//                 let ballRun = playball()
//                 if (ballRun !== 'out') {
//                     totalPlayerRuns += ballRun
//                 }
//                 else {
//                     if(playerCount !== 10){
//                         team2.runs += totalPlayerRuns
//                         team2.players[playerCount].runs = totalPlayerRuns;
//                         totalPlayerRuns = 0
//                         playerCount += 1;
//                     }
//                     if (playerCount === 10){
//                         break;
//                     }

//                 }

//             }
//             if (playerCount === 10){
//                 console.log('all out')
//                 break;
//             }
//         }

//         totalPlayerRuns = 0
//         playerCount = 0

//         for (let i = 0; i < 20; i++) {
//             for (let i = 0; i < 6; i++) {
//                 let ballRun = playball()
//                 if (ballRun !== 'out') {
//                     totalPlayerRuns += ballRun
//                 }
//                 else {
//                     if(playerCount !== 10){
//                         team1.runs += totalPlayerRuns
//                         team1.players[playerCount].runs = totalPlayerRuns;
//                         totalPlayerRuns = 0
//                         playerCount += 1;
//                     }
//                     if (playerCount === 10){
//                         break;
//                     }
//                 }

//             }
//             if(playerCount === 10){
//                 console.log('all out')
//                 break;
//             }
//         }
//     }
//     else if (choice === 'ba'){
//         for (let i = 0; i < 20; i++) {
//             for (let i = 0; i < 6; i++) {
//                 let ballRun = playball()
//                     if (ballRun !== 'out') {
//                         totalPlayerRuns += ballRun
//                     }
//                     else {
//                         if(playerCount !== 10){
//                             team1.runs += totalPlayerRuns
//                             team1.players[playerCount].runs = totalPlayerRuns;
//                             totalPlayerRuns = 0
//                             playerCount += 1;
//                         }
//                         if (playerCount === 10){
//                             break;
//                         }

//                     }

//             }
//             if (playerCount === 10){
//                 console.log('all out')
//                 break;
//             }
//         }

//         totalPlayerRuns = 0
//         playerCount = 0

//         for (let i = 0; i < 20; i++) {
//             for (let i = 0; i < 6; i++) {
//                 let ballRun = playball()
//                 if (ballRun !== 'out') {
//                     totalPlayerRuns += ballRun
//                 }
//                 else {
//                     if(playerCount !== 10){
//                         team2.runs += totalPlayerRuns
//                         team2.players[playerCount].runs = totalPlayerRuns;
//                         totalPlayerRuns = 0
//                         playerCount += 1;
//                     }
//                     if(playerCount === 10){
//                         break;
//                     }

//                 }

//             }
//             if(playerCount === 10){
//                 console.log('all out')
//                 break;
//             }
//         }
//     }
    
// }
// else {
//     console.log('Please enter a valid number')
// }

// console.log(' ')

// console.log('************************************')

// console.log(`${team1.name} scored ${team1.runs}`)

// for (let i = 0; i < 10; i++) {
//     console.log(`${team1.players[i].name}: ${team1.players[i].runs}`)
// }

// console.log(' ')

// console.log(`${team2.name} scored ${team2.runs}`)
// for (let i = 0; i < 10; i++) {
//     console.log(`${team2.players[i].name}: ${team2.players[i].runs}`)
// }

// console.log(' ')

// if (team1.runs > team2.runs){
//     console.log(`${team1.name} wins by ${team1.runs - team2.runs} runs`)
// }
// else if (team1.runs < team2.runs){
//     console.log(`${team2.name} wins by ${team2.runs - team1.runs} runs`)
// }
// else{
//     console.log('draw')
// }

function generateRandNum() {
    let randNum = Math.floor(Math.random() * 150) + 1

    if (randNum > 0 && randNum <= 40) {
        return 1
    }
    else if (randNum > 40 && randNum <= 70) {
        return 2
    }
    else if (randNum > 70 && randNum <= 75) {
        return 3
    }
    else if (randNum > 75 && randNum <= 90) {
        return 4
    }
    else if (randNum > 90 && randNum <= 100) {
        return 6
    }
    else if (randNum > 100 && randNum <= 113) {
        return 'out'
    }
    else {
        return 0
    }
}

function printPlayers(team) {
    for (let i = 0; i < 10; i++) {
        console.log(team.players[i].name)
    }
}

function playball() {
    return generateRandNum()
}

function playInnings(team, totalPlayerRuns, playerCount){
    for (let i = 0; i < 20; i++) {
        for (let i = 0; i < 6; i++) {
            let ballRun = playball()
            if (ballRun !== 'out') {
                totalPlayerRuns += ballRun
            }
            else {
                if(playerCount !== 10){
                    team.runs += totalPlayerRuns
                    team.players[playerCount].runs = totalPlayerRuns;
                    totalPlayerRuns = 0
                    playerCount += 1;
                }
                if(playerCount === 10){
                    break;
                }

            }

        }
        if(playerCount === 10){
            console.log('all out')
            break;
        }
    }
}

// randNum = generateRandNum()
// console.log(randNum)

class Team {
    constructor(name, players, runs) {
        this.name = name
        this.runs = runs
        this.players = players
    }
}

class Player {
    constructor(name, runs, wickets) {
        this.name = name
        this.runs = runs
        this.wickets = wickets
    }
}

const virat = new Player('virat', 0, 0)
const roshitSharma = new Player('Rohit Sharma', 0, 0)
const msDhoni = new Player('MS Dhoni', 0, 0)
const hardikPandya = new Player('hardikPandya', 0, 0)
const bumrah = new Player('bumrah', 0, 0)
const rahul = new Player('rahul', 0, 0)
const jadeja = new Player('jadeja', 0, 0)
const pant = new Player('pant', 0, 0)
const shami = new Player('shami', 0, 0)
const chahal = new Player('chahal', 0, 0)

const team1 = new Team('india', [virat, roshitSharma, msDhoni, hardikPandya, bumrah, rahul, jadeja, pant, shami, chahal], 0)

const travis = new Player('travis', 0, 0)
const marsh = new Player('marsh', 0, 0)
const smith = new Player('smith', 0, 0)
const warner = new Player('warner', 0, 0)
const marnus = new Player('marnus', 0, 0)
const alex = new Player('alex', 0, 0)
const stoinis = new Player('stoinis', 0, 0)
const sean = new Player('sean', 0, 0)
const ashton = new Player('ashton', 0, 0)
const mitchell = new Player('mitchell', 0, 0)

const team2 = new Team('australia', [travis, marsh, smith, warner, marnus, alex, stoinis, sean, ashton, mitchell], 0)

console.log(team1.name.toUpperCase())
printPlayers(team1)
console.log('')
console.log('vs')
console.log('')
console.log(team2.name.toUpperCase())
printPlayers(team2)

let user_team = parseInt(prompt('choose your team: 1 for team1 and 2 for team2: '))
let choice = prompt('You choose to: "bat" or "ball"? enter b for bat and ba for ball')
let playerCount = 0
let totalPlayerRuns = 0

if (user_team === 1) {
    user_team = team1
    console.log(' ')
    console.log(user_team.name)
    if (choice === 'b') {
        playInnings(team1, totalPlayerRuns, playerCount)

        totalPlayerRuns = 0
        playerCount = 0

        playInnings(team2, totalPlayerRuns, playerCount)
    }
    else if (choice === 'ba'){
        playInnings(team2, totalPlayerRuns, playerCount)

        totalPlayerRuns = 0
        playerCount = 0

        playInnings(team1, totalPlayerRuns, playerCount)
    }
}
else if (user_team === 2) {
    user_team = team2
    user_team = team1
    console.log(' ')
    console.log(user_team.name)
    if (choice === 'b') {
        playInnings(team2, totalPlayerRuns, playerCount)

        totalPlayerRuns = 0
        playerCount = 0

        playInnings(team1, totalPlayerRuns, playerCount)
    }
    else if (choice === 'ba'){
        playInnings(team1, totalPlayerRuns, playerCount)

        totalPlayerRuns = 0
        playerCount = 0

        playInnings(team2, totalPlayerRuns, playerCount)
    }
    
}
else {
    console.log('Please enter a valid number')
}

console.log(' ')

console.log('************************************')

console.log(`${team1.name} scored ${team1.runs}`)

for (let i = 0; i < 10; i++) {
    console.log(`${team1.players[i].name}: ${team1.players[i].runs}`)
}

console.log(' ')

console.log(`${team2.name} scored ${team2.runs}`)
for (let i = 0; i < 10; i++) {
    console.log(`${team2.players[i].name}: ${team2.players[i].runs}`)
}

console.log(' ')

if (team1.runs > team2.runs){
    console.log(`${team1.name} wins by ${team1.runs - team2.runs} runs`)
}
else if (team1.runs < team2.runs){
    console.log(`${team2.name} wins by ${team2.runs - team1.runs} runs`)
}
else{
    console.log('draw')
}