var katzDeliLine = [];

function takeANumber(katzDeliLine, personName){
  katzDeliLine.push(personName);

  for(let i = 0; i < katzDeliLine.length; i++) {

      return "Welcome, " + personName + "." + " You are number " + (katzDeliLine.length) + " in line."
  }
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  } else {
    return `Currently serving ${katzDeliLine.shift()}.`
    //   var firstPerson = katzDeliLine[0]
    //   katzDeliLine.shift()
    //
    // return "Currently serving " + firstPerson + "."
  }
}
