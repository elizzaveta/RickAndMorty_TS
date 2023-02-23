import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Character from "../pages/character/Character";

const appRouter = [
    {
        id: 1,
        path: '/',
        component: Home
    },
    {
        id: 2,
        path: "/:searchQuery",
        component: Home
    },
    {
        id: 3,
        path: '/about',
        component: About
    },
    {
        id: 4,
        path: '/character/:id',
        component: Character
    }
]


export default appRouter;