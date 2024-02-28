import { authMiddleware } from "@clerk/nextjs";
//https://clerk.com/docs/quickstarts/nextjs?_gl=1*v19zyd*_gcl_au*MjE3ODY2Mjc4LjE3MDkxNDI2NDE.*_ga*MTIyMTY4MTE1NS4xNzA5MTQyNjQx*_ga_1WMF5X234K*MTcwOTE0OTUxMi4yLjEuMTcwOTE0OTUxMy4wLjAuMA..
export default authMiddleware({
    // Routes that can be accessed while signed out
    publicRoutes: ['/site', '/api/uploadthing'],
    // Routes that can always be accessed, and have
    // no authentication information
    ignoredRoutes: ['/no-auth-in-this-route'],
});

export const config = {
    // Protects all routes, including api/trpc.
    // See https://clerk.com/docs/references/nextjs/auth-middleware
    // for more information about configuring your Middleware
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};