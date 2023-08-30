import { Navigate, RouteObject, createBrowserRouter, generatePath } from "react-router-dom"

import { Public } from "./PublicRoute"
import { Login } from "../pages/Login"

export const APP_ROUTES = {
  main: "/",
  login: "/login",
} as const

type RoutesMap = typeof APP_ROUTES

export type RouteName = keyof RoutesMap

export type Route = RoutesMap[RouteName]

export type GetParams<T> = string extends T
  ? object
  : T extends `${string}:${infer Param}/${infer Rest}`
  ? { [k in Param | keyof GetParams<Rest>]: string }
  : T extends `${string}:${infer Param}`
  ? { [k in Param]: string }
  : object

type HasKeys<T> = keyof T extends never ? false : true

type ExtractParams<T> = HasKeys<GetParams<T>> extends true ? GetParams<T> : undefined

export type GetPayload<T extends RouteName> = ExtractParams<RoutesMap[T]> extends undefined
  ? [undefined?]
  : [Record<keyof ExtractParams<RoutesMap[T]>, string>]

export const getUrl = <T extends RouteName>(url: T, ...[params]: GetPayload<T>) =>
  generatePath<string>(APP_ROUTES[url], params)

const routes: (RouteObject & { path: Route })[] = [
  {
    path: "/",
    element: <Navigate to="/" replace />,
  },
  {
    path: "/login",
    element: <Public element={Login} />,
  },
]

export const router = createBrowserRouter(routes)
