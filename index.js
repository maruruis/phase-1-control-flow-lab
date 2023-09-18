function scuberGreetingForFeet(x) {
  // Write your code here!
  if(x<=400) {
    return 'This one is on me!'
    } else if (x > 2000 && x <=2500) {
      return 'I will gladly take your thirty bucks.'
    } else {
      return 'No can do.'
    }
  }
const y= 'NYC'
function ternaryCheckCity(y){
  return (y ==='NYC') ? `Ok, sounds good.`: `No go.`;

  
}
const z= 'generous'
function switchOnCharmFromTip(z){
  switch (z){
    case 'generous':
      return ('Thank you so much.');

      case 'not as generous':
        return('Thank you.');
        default:

        return ('Bye.')
      
  }
  
}