var count = 0;

function cc(card) {
  // Only change code below this line
  if (card >= 2 && card <= 6)
    count += 1;
  else if ([10, 'J', 'Q', 'K', 'A'].includes(card))
    count -= 1;
  
  
  var statement = (count > 0) ? 'Bet' : 'Hold';
  return count.toString() + " " + statement;
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
