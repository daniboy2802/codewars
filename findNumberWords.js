let text = "Hello, my name is Daniel and my actual dream is become into a great web developer. In order to do this I need to work and study harder than evryone else. Hello, my name is Daniel and my actual dream is become into a great web developer. In order to do this I need to work and study harder than evryone else."

const normalize = (word) => {
  return word.toLowerCase().replace(/[.,]/g, '')
}

const countWordsPerText = (text) => {
  separateWords = text.split(' ')
  const countedWords = {}
  separateWords.forEach(word => {
    word = normalize(word)
    !countedWords[word] ? countedWords[word] = 1 : countedWords[word]++
  })
  return countedWords
}

countWordsPerText(text)
