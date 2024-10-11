const teams = [
  // {
  //   name: 'Milan',
  //   score : 0,
  //   fouls : 0
  // }
]

function createTeam(name = 'NoName'){
  // let score = Math.floor(Math.random()*100)
  // let fouls = Math.floor(Math.random()*100)

  const team = {
    name : name,
    score : 0,
    fouls : 0
  }
  return team
}


function calcScoreAndFouls(team){
  let score = Math.floor(Math.random()*100)
  let fouls = Math.floor(Math.random()*100)

  team.score = score
  team.fouls = fouls

  return team
}

const teamNames = ['Milan','Juventus','Inter','Roma','Lazio','Atalanta','Genoa','Torino']

for (let i = 0; i < teamNames.length; i++){
  const team = createTeam(teamNames[i])
  teams.push(team)
}

for (let i = 0; i < teams.length; i++){
  const team = calcScoreAndFouls(teams[i])
  teams[i] = team
}

console.log(teams);

function printTeams(o){
  

  let newO = [];

  for (let i = 0; i < o.length; i++){
    const struct = {
      name :  o[i].name,
      score : o[i].fouls
    }
    newO.push(struct)
  }

  return newO
}


const mytry = printTeams(teams)
console.log(mytry);
