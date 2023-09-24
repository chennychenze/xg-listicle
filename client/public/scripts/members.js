const renderMembers = async () => {
  const response = await fetch("/members");
  const data = await response.json();

  const mainContent = document.getElementById("main-content");
  const grid = document.createElement("div");
  grid.classList.add("grid");

  if (data) {
    data.map((member) => {
      const profile = document.createElement("div");
      profile.classList.add("profile");

      const image = document.createElement("img");
      image.src = `images/${member.image}`;
      image.style = "width: 80%";

      const name = document.createElement("h2");
      name.textContent = member.name;

      const dob = document.createElement("small");
      dob.textContent = "DOB: " + member.dob;

      const position = document.createElement("h5");
      position.textContent = member.position;

      const link = document.createElement("a");
      link.textContent = `more about ${member.name}  >`;
      link.setAttribute("role", "button");
      link.setAttribute("class", "outline");
      link.href = `/members/${member.id}`;

      profile.appendChild(image);
      profile.appendChild(name);
      profile.appendChild(dob);
      profile.appendChild(position);
      profile.appendChild(link);

      grid.appendChild(profile);

      profile.style.textAlign = "center";
      profile.style.paddingBottom = "50px";
      name.style.paddingTop = "10px";
      name.style.marginBottom = "10px";
      link.style.marginTop = "-20px";
      link.style.fontSize = "16px";
    });
  } else {
    /* here needs some attention */
    const message = document.createElement("h2");
    message.textContent = "No members Available 😞";
    mainContent.appendChild(message);
  }
  mainContent.appendChild(grid);
};

const requestedUrl = window.location.href.split("/").pop();

if (requestedUrl) {
  window.location.href = "../404.html";
} else {
  renderMembers();
}
