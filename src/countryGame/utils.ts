export const DATA: any = {
    India: "Delhi",
    Russia: "Moscow",
    China: "Berlin",
  };

export const shuffleData = (dataArray:any) => {
    let shuffleArray = [];
    let usedIndex: any = [];
    let i = 0;
    while (i < dataArray.length) {
      let randomNumber = Math.floor(Math.random() * dataArray.length);
      if (!usedIndex.includes(randomNumber)) {
        shuffleArray.push(dataArray[randomNumber]);
        usedIndex.push(randomNumber);
        i++;
      }
    }
    return shuffleArray;
  };