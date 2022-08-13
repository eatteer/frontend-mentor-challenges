import { createContext, useContext, useEffect, useState } from 'react'

interface IFormStateContext {
  rank: number
  isSubmitted: boolean
  setRank: Function
  setIsSubmitted: Function
}

const initialFormStateContext: IFormStateContext = {
  rank: 1,
  isSubmitted: false,
  setRank: () => {},
  setIsSubmitted: () => {},
}

const FormStateContext = createContext(initialFormStateContext)

interface IProps {
  children?: React.ReactNode
}

export const FormStateContextProvider = ({ children }: IProps) => {
  const [rank, setRank] = useState(initialFormStateContext.rank)
  const [isSubmitted, setIsSubmitted] = useState(
    initialFormStateContext.isSubmitted
  )

  const context: IFormStateContext = {
    rank,
    isSubmitted,
    setRank,
    setIsSubmitted,
  }

  useEffect(() => {
    console.log(isSubmitted)
  }, [isSubmitted])

  return (
    <FormStateContext.Provider value={context}>
      {children}
    </FormStateContext.Provider>
  )
}

export const useFormState = () => {
  return useContext(FormStateContext)
}
