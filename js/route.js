const repoName = window.location.hostname.includes('github.io')
    ? '/' + window.location.pathname.split('/')[1]
    : '';

const routes = {
    404: "/pages/404.html",
    "/": "/pages/home.html",
    "/about": "/pages/about.html",
    "/dashboard": "/pages/dashboard.html"
};

export const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    const path = event.target.getAttribute('href');
    const url = `${repoName}${path}`;
    window.history.pushState({}, "", url);
    handleLocation();
};

export const handleLocation = async () => {
    const path = window.location.pathname;
    const localPath = path.replace(repoName, "") || "/";
    const routeFile = routes[localPath] || routes[404];
    const html = await fetch(`${repoName}${routeFile}`).then((data) => data.text());
    document.getElementById("app").innerHTML = html;
};