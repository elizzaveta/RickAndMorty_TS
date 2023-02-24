import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Character from "../pages/character/Character";
import Episode from "../pages/episode/Episode";
import Episodes from "../pages/episodes/Episodes";
import NotFound from "../components/NotFound";

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
    },
    {
        id: 5,
        path: '/episode/:id',
        component: Episode
    },
    {
        id: 6,
        path: '/episodes',
        component: Episodes
    },
    {
        id: 7,
        path: '/episodes/:searchQuery',
        component: Episodes
    },
    {
        id:8,
        path: "*",
        component: NotFound
    }
]


export default appRouter;