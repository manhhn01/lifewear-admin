import {
  matchPath,
  useLocation,
} from "react-router-dom";

export const useRouteMatcher = () => {
  const { pathname } = useLocation();

  return (pattern: string) => {
    const match = matchPath(pattern, pathname);
    return !!match;
  };
};
