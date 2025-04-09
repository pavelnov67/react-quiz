import { createContext } from 'react'

const OffsetContext = createContext({
  offset: 0,
  setOffset: () => {},
})

export default OffsetContext
