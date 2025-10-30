
import './App.css'
import FaqComponent from './components/FaqComponent'
import type { QuestionType } from './types/QuestionType'
const questions: QuestionType[] = [{
  id: 1,
  question: "What is Netflix?",
  answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur asperiores impedit perspiciatis quia sapiente quas minima voluptatibus. Corrupti, ducimus optio. Earum neque labore perspiciatis, sapiente sequi quibusdam commodi provident voluptatem!",
}, {
  id: 2,
  question: "How much does Netflix cost?",
  answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos, ipsum.",
}, {
  id: 3,
  question: "Where can i watch?",
  answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi necessitatibus laboriosam similique officiis quae laudantium laborum beatae aperiam hic nisi!",
}, {
  id: 4,
  question: "How do i cancel?",
  answer: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta dolorem necessitatibus enim saepe aut ratione?",
}, {
  id: 5,
  question: "What can i watch on Netflix?",
  answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, facilis.",
}, {
  id: 6,
  question: "Is Netflix good for kids?",
  answer: "Lorem ipsum dolor sit amet consectetur adipisicing.",
},]
function App() {

  return (
    <>
      <FaqComponent questionsList={questions} />
    </>
  )
}

export default App
