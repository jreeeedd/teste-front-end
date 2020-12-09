import React from 'react'
import useFetch from './Hooks/useFetch'

export const GlobalContext = React.createContext()

export const GlobalStorage = ({ children }) => {
  const { request, data, loading, error } = useFetch()

  return (
    <GlobalContext.Provider value={{ request, data, loading, error }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalContext
