import {useState} from 'react';

export function FocusCard() {
	const [focusState, setFocusState] = useState("");
  console.log(focusState)
	return (
		<div className='focus'>
			<h3>Today I Need To Focus On...</h3>
			<textarea
        onChange={(e) => setFocusState(e.target.value)}
				name='focusText'
				className='focusText'
        defaultValue={focusState}
        placeholder='Focusing On...'
			></textarea>
			<button>Save</button>
		</div>
	);
}
