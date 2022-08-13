import { RatingCard } from './components/RatingCard/RatingCard'
import { SubmittedCard } from './components/SubmittedCard/SubmittedCard'
import { Footer } from './components/Footer/Footer'
import { useFormState } from './contexts/FormStateContext'
import './index.css'

function App() {
  const { isSubmitted } = useFormState()
  return (
    <>
      <main className='main'>
        {!isSubmitted && <RatingCard />}
        {isSubmitted && <SubmittedCard />}
      </main>

      <Footer />
    </>
  )
}

export default App
