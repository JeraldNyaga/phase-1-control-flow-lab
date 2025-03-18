function scuberGreetingForFeet(feetVal){
  feetVal = parseInt(feetVal, 10);
  if(feetVal <= 400){
    return `This one is on me!`
  }
  else if(feetVal > 400 && feetVal <= 2000){
    return `That will be twenty bucks.`
  } else if(feetVal > 2000 && feetVal <= 2500){
    return `I will gladly take your thirty bucks.`
  } else{
    return `No can do.`
  }
}
function ternaryCheckCity(cityName){
  if(cityName === 'NYC'){
    return `Ok, sounds good.`
  }
  else{
    return `No go.`
  }
}

function switchOnCharmFromTip(tip){
  switch(tip){
    case 'generous':
      return `Thank you so much.`
      break;
    case 'not as generous':
      return `Thank you.`
      break;
    default:
      return `Bye.`
  }
}