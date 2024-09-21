console.log("Link-fix script loaded")
function updateLinkTargets() {
    console.log("Script is running inside function");

    var links = document.querySelectorAll("a");

    links.forEach(function(link) {
        if (link.hostname !== window.location.hostname) {
            link.setAttribute("target", "_self");
        }
    });
}

document.addEventListener("DOMContentLoaded", updateLinkTargets);
updateLinkTargets(); // Call it directly for testing

var loadingIcon = document.querySelector('.loading-icon');

if (loadingIcon) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                console.log("Loading icon is visible:", loadingIcon.className);
            }
        });
    });

    observer.observe(loadingIcon);
}
