import { Outlet,redirect } from "@tanstack/react-router";
import { createRouter, createRootRoute, createRoute} from '@tanstack/react-router';
import CharacterListPage from '../pages/CharacterListPage';
import CharacterDetailsPage from '../pages/CharacterDetailsPage';

type CharacterSearch = {
  page: number;
};

const rootRoute = createRootRoute({
  component: ()=><Outlet/>
});

const homeRedirectRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/', 
  component: () => null,
  beforeLoad: () => {
    throw redirect({ to: '/character' });
  },
});
export const charactersRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/character',
  component: CharacterListPage,
   validateSearch: (search: Record<string, string|unknown>): CharacterSearch => ({
    page: Number(search.page) > 0 ? Number(search.page) : 1,
  }),
});

const characterDetailsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/character/$id',
  component: CharacterDetailsPage,
});

export const router = createRouter({ routeTree:rootRoute.addChildren([
  homeRedirectRoute,
  charactersRoute,
  characterDetailsRoute, 
]) });
