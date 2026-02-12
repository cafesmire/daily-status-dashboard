import { useState, useEffect } from 'react';
import { getQuoteOfTheDay } from '../actions/dataFetch';

export function QuoteCard() {
	const [dailyQuote, setDailyQuote] = useState("");

	useEffect(() => {
		let didFetch = false;
		const fetchData = async () => {
			if (didFetch) return;
			didFetch = true;
			const result = await getQuoteOfTheDay();
			setDailyQuote(result);
		}
		fetchData();
	}, []);

	return <div className='quote'>
		<h3>Quote Of The Day</h3>
		<p className='font-bold text-4xl my-auto'>{dailyQuote}</p>
	</div>;
}
