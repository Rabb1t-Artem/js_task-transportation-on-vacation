/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const longTerm = 7;
  const shirtTerm = 3;
  const longTermDisc = 50;
  const shirtTermDisc = 20;
  const result = days * 40;

  if (days >= shirtTerm && days < 7) {
    return result - shirtTermDisc;
  } else if (days >= longTerm) {
    return result - longTermDisc;
  }

  return result;
}

module.exports = calculateRentalCost;
