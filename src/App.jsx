import './App.css';
import {Header, MoodCard, FocusCard, QuoteCard, TodoCard} from './components';

export default function App(){


  return (
    <div className='layout'>
      <Header />
      <div className='grid grid-cols-2 gap-10 flex-1'>
        <MoodCard />
        <FocusCard />
        <QuoteCard />
        <TodoCard/>
      </div>
    </div>
  )
}