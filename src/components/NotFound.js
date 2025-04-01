export const NotFound = () => {
    const app = document.querySelector("#app");
    app.innerHTML = "";

    const notFound = document.createElement("section");
    notFound.setAttribute("class", "errorPage");

    const title = document.createElement("h2");
    title.innerText = "Error";

    const message = document.createElement("p");
    const params = new URLSearchParams(window.location.search);
    const errorType = params.get("type");

    switch (errorType) {
        case "404":
            message.innerText = "The page you are looking for does not exist.";
            break;
        case "500":
            message.innerText = "Internal server error. Please try again later.";
            break;
        default:
            message.innerText = "An unexpected error occurred.";
    }

    notFound.appendChild(title);
    notFound.appendChild(message);

    app.appendChild(notFound);
}