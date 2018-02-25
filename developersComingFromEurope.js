function countDevelopers(list) {
	let count = 0;
  list.forEach ((listItem, index) => {
  	if (listItem.continent === 'Europe' && listItem.language === 'JavaScript'){
   	count++;
	  };
	});
 return count;
};
