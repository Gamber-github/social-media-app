import { Route } from "./router"

export const Public: React.FC<{ element: () => JSX.Element; fallback?: Route }> = ({ element, fallback }) => {

  const Component = element

  return <Component />
}
