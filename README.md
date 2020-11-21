# Ideas-board
This program will have a front and back end. Running an api on the backend, and a simple, but pretty frontend.

# The api
The api behind the project will be running typescript. The idea is to have a simple api with a simple database.  
The api will in it's core be running typescript with express.  
The database will be a simple .txt file, but there's a plan to upgrade to mongodb.

# The front end
The idea of the front end was to use React, but it wouldn't be really necessary, since it's such a simple application.  
Although, to go to the next level, I have the intention to use React.  

### Saving the ideas
To save the ideas, the program will send a post request to the api with the coordinates, and text after every idea saved.  
The post request will then be evaluated, and if everything is fine, it will save the following object to the database:
```json
{
    "x": 69,
    "y": 420,
    "text": "foobar"
}
```

### Getting the ideas on the load
To get the ideas when the page reloads, the program will call a get request to the api, and it will receive the following object:
```json
[
    {
        "x": 69,
        "y": 420,
        "text": "foobar"
    },
    {
        "x": 420,
        "y": 69,
        "text": "foo"
    }
]
```
And it will iterate each object, appending it to the coordinates.  

# Libs
1. Express
1. Typescript
