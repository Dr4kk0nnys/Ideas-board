document.addEventListener('click', async coordinates => {
    const idea = document.createElement('p');

    idea.style.position = "absolute";
    idea.style.marginTop = `${coordinates.clientY}px`;
    idea.style.marginLeft = `${coordinates.clientX}px`;

    idea.innerText = prompt("What is the idea ?");
    document.body.appendChild(idea);

    await postData({"x": coordinates.clientX, "y": coordinates.clientY}, idea.innerText);
});

// TODO: Send credentials

async function postData(coordinates, text) {
    await fetch('http://localhost:8082/idea', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({coordinates, text})
    });
}

window.addEventListener('load', async () => {
    const request = await fetch('http://localhost:8082/idea/saved', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'credentials': null})
    });

    for (object of await request.json()) {
        const element = document.createElement('p');

        element.style.position = "absolute";
        element.style.marginTop = `${object.y}px`;
        element.style.marginLeft = `${object.x}px`;

        element.style.color = '#' + Math.floor(Math.random()*16777215).toString(16);

        element.innerText = object.text;

        document.body.appendChild(element);
        element.onmousedown = async () => {
            document.body.removeChild(element);

            // TODO: Send a delete request
            await fetch('http://localhost:8082/idea', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({'text': element.innerText})
            });
            console.log(e);

        }
    }
});