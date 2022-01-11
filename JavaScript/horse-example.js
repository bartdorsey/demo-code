const tryGetRich = () => {
  readFile('luckyNumber.txt', 'utf-8', (err, fileContents) => {
    const nums = fileContent.split(",");
    nums.forEach(num => {
      bookmaker.getHorse(num, (err, horse) => {
        bookmaker.bet(horse, (err, success) => {
          if (success) {
            console.log("We Won");
          }
        })
      })
    })
  })
}


const tryGetRich = () => {
  readFile('luckyNumber.txt', 'utf-8')
    .then((fileContents) => {
      return bookmaker.getHorse(num);
    })
    .then(horse => {
      return bookmaker.bet(horse);
    })
    .then((err, success) => {
      if (success) {
        console.log("We won");
      }
    });
}