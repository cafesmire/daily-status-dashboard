export async function getQuoteOfTheDay() {
	const url =
		'https://quotes-api12.p.rapidapi.com/dev-jokes?category=all&subcategory=javascript';
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': 'd017988155msh9becd163b108d42p127a0fjsn4b469339dd8c',
			'x-rapidapi-host': 'quotes-api12.p.rapidapi.com',
		},
	};

	try {
		const response = await fetch(url, options);
		const result = await response.text();
    return result;
	} catch (error) {
		console.error(error);
	}
}
