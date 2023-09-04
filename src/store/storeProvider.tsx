import { ReactNode, createContext, useContext, useState } from "react"

export type UserType = "Anonymous" | "User" | "Admin"

export type User = {
  firstName: string
  lastName: string
  email: string
  type: UserType
}

type State = {
  user: User
}

const user: User = {
  firstName: "Wojciech",
  lastName: "Kubik",
  email: "wkwojteczkii@gmail.com",
  type: "User",
}

const initalState: State = {
  user,
}

const MockedStoreContext = createContext<{
  state: State
}>({} as { state: State })

export const MockedStoreContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state] = useState(initalState)

  const value = { state, actions: {} }

  return <MockedStoreContext.Provider value={value}>{children}</MockedStoreContext.Provider>
}

export const useStore = () => useContext(MockedStoreContext)
