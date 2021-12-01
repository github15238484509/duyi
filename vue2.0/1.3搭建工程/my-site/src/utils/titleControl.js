let routeTitle = "";
let siteTitle = "";


function setTitle() {
    if (!routeTitle && !siteTitle) {
        document.title = "loading..."
    } else if (routeTitle && !siteTitle) {
        document.title = routeTitle
    } else if (!routeTitle && siteTitle) {
        document.title = siteTitle
    } else {
        document.title = siteTitle + "-" + routeTitle
    }
}

export function setRouterTitle(title) {
    routeTitle = title
    setTitle()
}


export function setSiteTitle(title) {
    siteTitle = title
    setTitle()
}