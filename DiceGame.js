const Play = (player, dices) => {
  const players = [];
  const round = 1;
  const playerCount = player;
  for (let i = 0; i < player; i++) {
    players.push({
      name: `Player ${i + 1}`,
      dice: [],
      score: 0,
    });
    for (let j = 0; j < dices; j++) {
      let num = Math.floor(Math.random() * 6) + 1;
      players[i].dice.push(Number(num));
    }
  }

  while (players.length !== 1) {
    console.log('Giliran lempar dadu ke ', round);
  }

  // console.log('Giliran lempar dadu ke ', round);
  // console.log(player.name + `[${player.score - 1}]:` + player.dice);
  // players.map((player) => {
  //   const find = player.dice.filter((number) => number === 6);
  //   const remove = player.dice.filter((number) => number !== 6);
  //   console.log(find);
  //   for (let i = 0; i < find.length; i++) {
  //     player.score += 1;
  //   }
  //   console.log(player.name + `[${player.score}]:` + remove);
  // }); c
};

Play(3, 4);
