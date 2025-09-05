const routes = {
    404: "/pages/404.html",
    "/": "/pages/home.html",
    "/about": "/pages/about.html",
    "/dashboard": "/pages/dashboard.html"
};

export const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.getAttribute('href'));
    handleLocation();
};

export const handleLocation = async () => {
    const path = window.location.pathname;
    const routeFile = routes[path] || routes[404];
    const html = await fetch(routeFile).then((data) => data.text());
    document.getElementById("app").innerHTML = html;

    if (path === "/dashboard") {
        console.log("Página do Dashboard carregada!");
    }
};