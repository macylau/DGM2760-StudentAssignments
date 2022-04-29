const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
		'X-RapidAPI-Key': 'ab3f733cb0mshb4a3f63d8e7060fp14c793jsnee717486e28c'
	}
};


fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&q=pho', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


// const loadedRecipes = []

// async function loadRecipes(from = 0, size = 10) {
// 	const recipeData = await getAPIData(
// 	  `https://tasty.p.rapidapi.com/recipes/list?from=${from}&size=${size}&q=pho`,
// 	)
// 	for (const nameAndUrl of recipeData.results) {
// 	  const recipe = await getAPIData(nameAndUrl.url)
// 	  const simplifiedRecipes = {
// 		name: recipe.name,
// 		num_servings: recipe.num_servings,
// 		ingredients: recipe.sections[0].components,
// 		instructions: recipe.instructions,
// 	  }
// 	  console.log(recipe.sections[0].components)
// 	  loadedRecipes.push(simplifiedRecipes)
// 	  populateRecipes(simplifiedRecipes)
// 	}
//   }
