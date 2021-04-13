let names = ["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"]
const whoIsNext = (names, r) => {
  if(r < names.length) {
    return names[r - 1]
  } else {
    let numeroTotalTurnos = names.length 
    let numeroPersonasEnFilaActualmente = names.length
    while(r > numeroTotalTurnos) {
      numeroPersonasEnFilaActualmente *= 2
      numeroTotalTurnos += numeroPersonasEnFilaActualmente
    }
    console.log({
      numeroPersonasEnFilaActualmente: numeroPersonasEnFilaActualmente, 
      numeroTotalTurnos: numeroTotalTurnos,
      numeroBuscar: r,
      turnoPrimerPosicionPersonasEnFilaActualmente: numeroTotalTurnos - numeroPersonasEnFilaActualmente,
      contador: r - (numeroTotalTurnos - numeroPersonasEnFilaActualmente),
      actualTurn: names[Math.ceil(((r - (numeroTotalTurnos - numeroPersonasEnFilaActualmente))  / numeroPersonasEnFilaActualmente) *  names.length) - 1]
    })
  }
}
whoIsNext(names, 7230702951)