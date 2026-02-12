import {useState} from 'react';

export function FocusCard() {
	const [focusState, setFocusState] = useState("");

	return (
		<div className='focus'>
			<h3>Today I Need To Focus On...</h3>
			<textarea
				className='border p-2 rounded-xl min-h-1/2'
        onChange={(e) => setFocusState(e.target.value)}
				name='focusText'
        defaultValue={focusState}
        placeholder='I want to accomplish...'
			></textarea>
			<button>Save</button>
		</div>
	);
}
