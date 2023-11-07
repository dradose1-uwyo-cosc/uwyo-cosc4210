//Danny Radosevich
//Adv Web Apps
//Lec 7

fetch(`https://api.github.com/users/dradosevich`)
.then(response => response.json())
.then(console.log)
.catch(console.error);

async function requestGithubUser(githubLogin) 
{
    try 
    {
        const response = await fetch(`https://api.github.com/users/${githubLogin}`);
        const userData = await response.json();
        console.log(userData);
    } 
    catch (error) 
    {
        console.error(error);
    }
}

fetch("/create/user", 
{
    method: "POST",
    body: JSON.stringify({ username, password, bio })
});

const formData = new FormData();
formData.append("username", "moontahoe");
formData.append("fullname", "Alex Banks");
forData.append("avatar", imgFile);
fetch("/create/user", 
{
    method: "POST",
    body: formData
});