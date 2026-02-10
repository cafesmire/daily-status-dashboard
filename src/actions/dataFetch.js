export async function getQuoteOfTheDay() {
	const url = import.meta.env.VITE_QUOTE_URL;
		const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': import.meta.env.VITE_QUOTE_KEY,
			'x-rapidapi-host': import.meta.env.VITE_QUOTE_HOST,
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
