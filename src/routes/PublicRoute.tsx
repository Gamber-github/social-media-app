import { Route } from "./router"

export const Public: React.FC<{ element: () => JSX.Element; fallback?: Route }> = ({ element }) => {
  const Component = element

  return <Component />
}
