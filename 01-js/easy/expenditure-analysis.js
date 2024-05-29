/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  // Object to hold the total spent for each category
  const totalSpentByCategory = {};

  // Iterate over each transaction
  transactions.forEach(transaction => {
      // If the category is not yet in the object, add it with the initial price
      if (!totalSpentByCategory[transaction.category]) {
          totalSpentByCategory[transaction.category] = transaction.price;
      } else {
          // If the category already exists, accumulate the price
          totalSpentByCategory[transaction.category] += transaction.price;
      }
  });

  // Transform the accumulated totals into the desired output format
  const result = Object.keys(totalSpentByCategory).map(category => ({
      category: category,
      totalSpent: totalSpentByCategory[category]
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
