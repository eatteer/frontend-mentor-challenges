import illustrationThankYou from '../../assets/images/illustration-thank-you.svg'
import { useFormState } from '../../contexts/FormStateContext'
import './SubmittedCard.css'

export const SubmittedCard = () => {
  const { rank } = useFormState()
  return (
    <article className='card submitted-card '>
      <img
        className={'submitted-card__image'}
        src={illustrationThankYou}
        alt='Thank you'
      />
      <p className='submitted-card___rating-submitted'>
        You selected {rank} out 5
      </p>
      <h2 className='submitted-card__title'>Thank you!</h2>
      <p className='submitted-card__description'>
        We appreciate you taking the time to give a rating, If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </article>
  )
}
