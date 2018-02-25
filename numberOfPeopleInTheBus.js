var number = function(busStops) {
	let peopleOnBus = busStops.forEach((busStop, index) => {
		peopleOnBus += busStop[0];
		 peopleOnBus -= busStops[1];
	});
	 return peopleOnBus;
}
