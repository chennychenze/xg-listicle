const header = document.querySelector("header");

const heading = document.createElement("h1");
heading.textContent = "XG stands for 'Xtraordinary Girls'.";

const homeLink = document.createElement("a");
homeLink.textContent = "Back to Home <";
homeLink.setAttribute("role", "button");
homeLink.setAttribute("class", "outline");
homeLink.href = "/";

header.appendChild(heading);
header.appendChild(homeLink);
