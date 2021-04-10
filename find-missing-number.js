// An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.

// You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.
let array = [1, 3, 5, 9, 11]
let array2 = [1, 3, 5, 9, 11]

const findMissing = function(list) {  
  const duplicateArray = list.slice().reverse()
  let differences = []

  for(i = 0; i < list.length - 1; i ++) {
    differences.push(duplicateArray[i] - duplicateArray[i + 1])
  }

  differences = new Set(differences)
  differences = [...differences]

  differences.forEach(difference => {
    let missingNumberArray = []
    for(i = 0; i <= list.length; i++) {
      i == 0 ? missingNumberArray.push(list[0]) : missingNumberArray.push(missingNumberArray[i - 1] + difference)
    }
    if((missingNumberArray[list.length] == list[list.length - 1]) && missingNumberArray.length == list.length + 1) {
      finalNumber = missingNumberArray.filter(x => list.indexOf(x) === -1)
      return finalNumber[0]
    } 
  })
}

console.log(findMissing(array))
