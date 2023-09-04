//TODO: Complete Private routing

import { Navigate } from "react-router-dom"

import { RouteName, getUrl } from "./router"
import { UserType, useStore } from "../store/storeProvider"

type PrivateProps = { element: () => JSX.Element; fallback?: RouteName; access?: UserType[] }

export const Private: React.FC<PrivateProps> = ({ element, fallback, access = ["User", "Admin"] }) => {
  const { state } = useStore()

  const Component = element

  const { type } = state.user
  if (!access.includes(type)) return <Navigate to={fallback ? getUrl(fallback) : getUrl("dashboard")} replace />

  return <Component />
}
