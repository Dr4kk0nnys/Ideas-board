document.addEventListener('click', coordinates => {
    const idea = document.createElement('p');

    idea.style.position = "absolute";
    idea.style.marginTop = `${coordinates.clientY}px`;
    idea.style.marginLeft = `${coordinates.clientX}px`;

    idea.innerText = prompt("What is the idea ?");
    document.body.appendChild(idea);
});

