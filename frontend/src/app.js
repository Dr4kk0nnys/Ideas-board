document.addEventListener('click', coordinates => {
    const idea = document.createElement('p');

    idea.style.position = "absolute";
    idea.style.marginTop = `${coordinates.clientY}px`;
    idea.style.marginLeft = `${coordinates.clientX}px`;

    idea.innerText = prompt("What is the idea ?");
    document.body.appendChild(idea);

    postData({"x": coordinates.clientX, "y": coordinates.clientY}, idea.innerText);
});

function postData(coordinates, text) {
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8000/idea/", true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify({"coordinates": coordinates, text}));
    console.log(xhr.responseText);
}