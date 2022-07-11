const removeFromArray = function(items, ...removals) {
  filtered = items.filter(item => !removals.includes(item));
  return filtered;
}

// Do not edit below this line
module.exports = removeFromArray;
