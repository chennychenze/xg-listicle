const renderMember = async () => {
  const requestedID = parseInt(window.location.href.split("/").pop());

  const response = await fetch("/members");
  const data = await response.json();

  const memberContent = document.getElementById("member-content");

  let member;

  member = data.find((member) => member.id === requestedID);

  if (member) {
    const card = document.createElement("article");

    const image = document.createElement("img");
    image.src = `../images/${member.image}`;
    image.style = "width: 40%";

    const name = document.createElement("h2");
    name.textContent = member.name + " (" + member.fullName + ")";

    card.appendChild(image);
    card.appendChild(name);

    const textGroup = document.createElement("div");

    const birth = document.createElement("h5");
    birth.textContent = member.dob + ", " + member.pob;

    const position = document.createElement("h5");
    position.textContent = member.position;

    textGroup.appendChild(birth);
    textGroup.appendChild(position);

    card.appendChild(textGroup);

    const paragraph = document.createElement("footer");
    paragraph.textContent = member.facts;

    card.appendChild(paragraph);

    memberContent.appendChild(card);

    card.style.textAlign = "center";
    card.style.paddingTop = "50px";
    name.style.paddingTop = "10px";
    paragraph.style.marginTop = "10px";
  } else {
    const messageContainer = document.createElement("article");
    const message = document.createElement("h2");
    message.textContent = "XG has 7 members. No members found at this URL.";

    messageContainer.appendChild(message);
    messageContainer.style.textAlign = "center";

    memberContent.appendChild(messageContainer);
  }
};

renderMember();
