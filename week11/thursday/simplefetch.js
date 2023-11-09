//Danny Radosevich
// Simple fetch API example 

fetch("https://api.github.com/users/dradosevich")
    .then(res =>res.json())
    .then(console.log)