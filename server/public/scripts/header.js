const header = document.querySelector("header");

const heading = document.createElement("h1");
heading.textContent = "XG stands for 'Xtraordinary Girls'.";

const details = document.createElement("details");

const summary = document.createElement("summary");
summary.textContent = "According to the official website for XG -";

const paragraph = document.createElement("p");
paragraph.textContent =
  "'With their fresh, inventive music and performance, XG aims to empower young people from all over the world - from all walks of life.'";

details.appendChild(summary);
details.appendChild(paragraph);

header.appendChild(heading);
header.appendChild(details);
