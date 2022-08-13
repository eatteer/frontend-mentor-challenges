import classNames from 'classnames'
import start from '../../assets/images/icon-star.svg'
import './RatingCard.css'
import { useFormState } from '../../contexts/FormStateContext'

// Create array of five positions [1, 2, 3, 4, 5]
// So each item can represent a rank
const ranking = Array.from({ length: 5 }, (_, i) => i + 1)

export const RatingCard = () => {
  const { rank, setRank, setIsSubmitted } = useFormState()

  return (
    <article className='card'>
      <div className='rating-card__star'>
        <img src={start} alt='Star' />
      </div>
      <h2 className='rating-card__title'>How did we do?</h2>
      <p className='rating-card__description'>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className='rating'>
        {ranking.map((value) => {
          const key = `r${value}`
          return (
            <div
              key={key}
              className={classNames('rating__value', {
                ['rating__value--is-active']: rank === value,
              })}
              onClick={() => setRank(value)}
            >
              {value}
            </div>
          )
        })}
      </div>
      <button
        className='rating-card__button'
        onClick={() => setIsSubmitted(true)}
      >
        Submit
      </button>
    </article>
  )
}
