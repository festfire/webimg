function removeDuplicates(array) {
	if (array.length <= 1) {
		return array;
	}

	var result = [];

	for (var i = 0; i < array.length; i++) {
		if (result.length <= 0) {
			result.push(array[i]);
			continue;
		}

		var duplicate = false;
		for (var j = 0; j < result.length; j++) {
			if (result[j] == array[i]) {
				duplicate = true;
				break;
			}
		}
		if (!duplicate) {
			result.push(array[i]);
		}
	}

	return result;
}

function processTags(tags) {
	if(tags.length <= 0) {
		return [];
	}

	//	translate
	for (var i = 0; i < tags.length; i++) {
		tags[i] = translateTag(tags[i]);
	}

	//	association passes
	pass1 = getCategories(tags);
	pass2 = getCategories(tags.concat(pass1));
	pass3 = getCategories(tags.concat(pass2));
	
	//	remove duplicates
	result = removeDuplicates(tags.concat(pass3));

	//	remove hidden tags
	for (var i = result.length - 1; i >= 0; i--) {
		for (var j = 0; j < categories.length; j++) {
			if (!categories[j].hidden) {
				continue;
			}

			if (result[i] == categories[j].name) {
				result.splice(i, 1);
			}
		}
	}

	// sort
	result.sort(function(a, b){
		if(a < b) return -1;
		if(a > b) return 1;
		return 0;
	}); 

	return(result);
}