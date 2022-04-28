const recipes = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
		'X-RapidAPI-Key': '9991754114mshd924106d49b23a5p1c6f7fjsn1a6019903d22'
	}
};

fetch('https://tasty.p.rapidapi.com/recipes/list?from=0&size=10&q=pho', recipes)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));

	console.log(recipes)

const loadedRecipes = []

async function loadRecipes(from = 0, size = 10) {
	const recipeData = await getAPIData(
	  `https://tasty.p.rapidapi.com/recipes/list?from=${from}&size=${size}&q=pho`,
	)
	for (const nameAndUrl of recipeData.results) {
	  const recipe = await getAPIData(nameAndUrl.url)
	  const simplifiedRecipes = {
		name: recipe.name,
		num_servings: recipe.num_servings,
		ingredients: recipe.sections[0].components,
		instructions: recipe.instructions,
	  }
	  console.log(recipe.sections[0].components)
	  loadedRecipes.push(simplifiedRecipes)
	  populateRecipes(simplifiedRecipes)
	}
  }


