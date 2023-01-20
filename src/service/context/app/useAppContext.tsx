import { useContext } from 'react'
import { AppContext } from './AppContext'

export const useLoginContext = () => {
  return useContext(AppContext)
}