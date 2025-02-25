import { type RouteConfig, index } from "@react-router/dev/routes";
import { remixRoutesOptionAdapter } from "@react-router/remix-routes-option-adapter";
import { flatRoutes, type RouteManifest } from "remix-flat-routes";
/**
 * Remove Vercel-reserved characters from the routes
 * https://github.com/kiliman/remix-flat-routes/issues/152
 */
function vercelRoutes(routes: RouteManifest) {
  const fixedRoutes: RouteManifest = {};

  Object.entries(routes).forEach(([routeId, route]) => {
    route.id = routeId.replaceAll("+", "");

    if (route.parentId) {
      route.parentId = route.parentId.replaceAll("+", "");
    }

    fixedRoutes[route.id] = route;
  });

  return fixedRoutes;
}

export default remixRoutesOptionAdapter((defineRoutes) => {
    const routes = flatRoutes("routes", defineRoutes, {
      ignoredRouteFiles: ['**/.*'], // Ignore dot files (like .DS_Store)
      //appDir: 'app',
      //routeDir: 'routes',
      //basePath: '/',
      //paramPrefixChar: '$',
      nestedDirectoryChar: '-',
      //routeRegex: /((\${nestedDirectoryChar}[\/\\][^\/\\:?*]+)|[\/\\]((index|route|layout|page)|(_[^\/\\:?*]+)|([^\/\\:?*]+\.route)))\.(ts|tsx|js|jsx|md|mdx)$$/,
    });

    return vercelRoutes(routes)
  });
