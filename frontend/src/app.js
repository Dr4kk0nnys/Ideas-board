document.addEventListener('click', coordinates => {
    const button = document.createElement('button');

    button.style.position = "absolute";
    button.style.marginTop = `${coordinates.clientY}px`;
    button.style.marginLeft = `${coordinates.clientX}px`;

    button.innerText = prompt("What is the idea ?");
    document.body.appendChild(button);
});

