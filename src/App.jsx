import './App.css';
import {Header, MoodCard, FocusCard, QuoteCard, TodoCard} from './components';

export default function App(){


  return (
    <div className='layout'>
      <Header />
      <MoodCard />
      <FocusCard />
      <QuoteCard />
      <TodoCard/>
    </div>
  )
}