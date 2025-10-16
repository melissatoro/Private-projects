//START: Part 1 - How long have i lived for?   (Date och Math)

    let today = new Date();
    let todayYear = today.getFullYear();
    let todayMonth = today.getMonth() + 1;      //getMonth is in the format 0-11 therefore i have added the +1
    let todayDay = today.getDate();
    let fullDateToday = new Date(todayYear,todayMonth,todayDay);

    const age = new Date(1998,9,26);


    let differenceMillisec = fullDateToday.getTime() - age.getTime();
    yearDifference = Math.floor(differenceMillisec/31556900000);    // 31,556,900,000 is the amount of milliseconds in a year

    let amountOfDays = yearDifference*365;

    
    let ageNow = 'I am ' + yearDifference + ' years old, which in days is ' + amountOfDays + ' days';

    //console.log(ageNow);                      TO TEST IF IT WORKS

//END: Part 1 - How long have i lived for?

    
//START: Part 2 - Are these facts correct?       (String, Boolean, Array)

    let years = [1990, 2007, 2023, 1890, 1935];
    yearsLength = years.length;

    let headingText = 'Are these facts correct about me? \n';
    headingText = headingText.toUpperCase();

    let expression = headingText;

    for(i=0; i < yearsLength; i++) {
        let event = years[i] < age.getFullYear();
        let text = ': Was this year before i was born? ';

        expression += years[i] + text + event + '\n';
    }

    //console.log(expression);                              TO TEST IF IT WORKS

//END: Part 2 - Are these facts correct?


//START: Part 3 - How many A's are there in this sentence?      (Number, Regex)

    let question = 'How many of the letter A can you find in the sentence? \n'
    let sentence = ' "Melissa always arranges amazing art and attracts admiration" \n';
    let numofAText = 'The correct answer is '

    let numOfA = sentence.match(/a/g)
    let numOfALength = numOfA.length;

    console.log(question + sentence + numofAText + numOfALength + '\n');
    
    let sentenceLength = sentence.length;
    let procentageOfSentence = (numOfALength / sentenceLength) * 100;
    procentageOfSentence = procentageOfSentence.toFixed(0);

    let procentText = "What percentage of the letters in the sentence are the letter 'a'?' \n correct answer is: ";

    'What percentage of the letters in the sentence are the letter ‘a’?'

    //console.log(procentText + procentageOfSentence + ' %');           TO TEST IF IT WORKS

//END: Part 3 - How many A's are there in this sentence?

    

    
    




