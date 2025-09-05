import { handleLocation, route } from "./router.js";

window.route = route;
window.onpopstate = handleLocation;
handleLocation();