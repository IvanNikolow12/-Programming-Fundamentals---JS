function numbers (input) {

    let sequense = input.split(' ').map(Number)
      let sum = 0;
      let average = 0;
      
      for (const number of sequense) {
        sum += number
      }

      average = sum / sequense.length;
      let greater = sequense.filter(x => x > average);
      greater.join(' ')
      let sorted = greater.sort((a, b) => b - a).slice(0, 5).join(' ');
    
      if (sorted == 0) {
        console.log('No')
      }else {
        console.log(sorted)
      }
    }
    numbers ('10 20 30 40 50')
    numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51')
    numbers('1')
    numbers('-1 -2 -3 -4 -5 -6')