import star from './assets/icon-star.svg'
import colton from './assets/image-colton.jpg'
import irene from './assets/image-irene.jpg'
import anne from './assets/image-anne.jpg'
import useMediaQuery from './hooks/useMediaQuery'

const App = () => {
  return (
    <div className='flex lg:block flex-col items-center lg:m-auto px-12 xl:px-0 py-32 space-y-12 lg:space-y-20 max-w-5xl'>
      <div className='lg:flex lg:justify-between lg:items-center space-y-12 lg:space-y-0 '>
        <Hero />
        <Ratings />
      </div>
      <Reviews />
    </div>
  )
}

export default App

const Hero = () => {
  return (
    <section id='hero' className='max-w-sm space-y-8 text-center lg:text-left'>
      <h1 className='text-5xl font-bold text-very-dark-magenta'>
        10,000+ of our users love our products.
      </h1>
      <p className='mb-12 text-lg text-dark-grayish-magenta'>
        We only provide great products combined with excellent customer service.
        See what our satisfied customers are saying about our services.
      </p>
    </section>
  )
}

const ratingsText = [
  'Rated 5 Stars in Reviews',
  'Rated 5 Stars in Report Guru',
  'Rated 5 Stars in BestTech',
]

const generateDynamicMarginLeft = (index: number): React.CSSProperties => {
  return { marginLeft: `${index * 64}px` }
}

const Ratings = () => {
  const doesMatch = useMediaQuery('(min-width: 1024px)')
  return (
    <section id='ratings' className='lg:flex lg:flex-col space-y-12'>
      {ratingsText.map((ratingText, index) => {
        const style = doesMatch ? generateDynamicMarginLeft(index) : undefined
        return (
          <div style={style}>
            <Rating text={ratingText} />
          </div>
        )
      })}
    </section>
  )
}

const Rating = ({ text }: { text: string }) => {
  return (
    <div className={`lg:flex items-center lg:space-x-6 `}>
      <Starts />
      <h3 className='mt-4 lg:mt-0 text-center font-bold text-xl text-very-dark-magenta'>
        {text}
      </h3>
    </div>
  )
}

const Start = () => {
  return <img className='w-6 h-6' src={star} alt='Star' />
}

const Starts = () => {
  return (
    <div className='flex justify-center gap-2'>
      <Start />
      <Start />
      <Start />
      <Start />
      <Start />
    </div>
  )
}

const reviews = [
  {
    avatar: colton,
    name: 'Colton Smith',
    isVerified: true,
    text: 'We needed the same printed design as the one we had ordered a week prior. not only did they find the original order, but we also received it in time. Excellent!',
  },
  {
    avatar: irene,
    name: 'Irene Roberts',
    isVerified: true,
    text: 'Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery.',
  },
  {
    avatar: anne,
    name: 'Anne Wallace',
    isVerified: true,
    text: 'Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!',
  },
]

const generateDynamicMarginTop = (index: number): React.CSSProperties => {
  return { marginTop: `${index * 16}px` }
}

const Reviews = () => {
  const doesMatch = useMediaQuery('(min-width: 1024px)')
  return (
    <section className='lg:flex space-y-4 lg:space-y-0 lg:space-x-6'>
      {reviews.map((review, index) => {
        const style = doesMatch ? generateDynamicMarginTop(index) : undefined
        return (
          <div style={style}>
            <ReviewCard
              key={review.name}
              avatar={review.avatar}
              name={review.name}
              isVerified={review.isVerified}
              text={review.text}
            />
          </div>
        )
      })}
    </section>
  )
}

const ReviewCard = ({
  avatar,
  name,
  isVerified,
  text,
}: {
  avatar: string
  name: string
  isVerified: boolean
  text: string
}) => {
  const verifiedText = isVerified ? '' : 'Not '
  return (
    <article className='max-w-[337.7px] h-[248px] p-8 rounded-lg bg-very-dark-magenta'>
      <header className='flex space-x-4'>
        <img className='w-12 h-12 mb-4 rounded-full' src={avatar} alt='' />
        <div className='font-bold'>
          <h2 className='text-white'>{name}</h2>
          <h3 className='text-soft-pink'>{verifiedText}Verified Buyer</h3>
        </div>
      </header>
      <p className='text-white font-medium'>"{text}"</p>
    </article>
  )
}
