import {useState} from 'react';

export function FocusCard() {
	const [focusState, setFocusState] = useState("");
	const [savedFocus, setSavedFocus] = useState(false);

	const changeFocus = () => {
		setFocusState("");
		setSavedFocus(false);
	}
	return (
		<div className='focus'>
			<h3>Today I Need To Focus On...</h3>
			{
				savedFocus ?
				<p>{focusState}</p>
				:
				<textarea
				className='border p-2 rounded-xl min-h-1/2'
        onChange={(e) => setFocusState(e.target.value)}
				name='focusText'
        defaultValue={focusState}
        placeholder='I want to accomplish...'
			></textarea>
			
			}
			{
			savedFocus?
			<button onClick={changeFocus}>Change Focus</button>
			:
			<button onClick={() => setSavedFocus(true)}>Save</button>
			}
		</div>
	);
}
