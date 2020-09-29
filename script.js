var database = [
    {
        username: "Pepe",
        password: "hola"
    },
    {
        username: "Jose",
        password: "hello"
    },
    {
        username: "Juana",
        password: "alo"
    }
];

var newsFeed = [
    {
        username: "Juana",
        timeLine: "so tired from all that learning"
    },
    {
        username: "petra",
        timeLine: "Javascript is sooo coool!"
    }
];

function signIn() {
    var userPrompt = prompt("what's your username?");
    var passPrompt = prompt("what's your password?");
    var logged = false;
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === userPrompt && database[i].password === passPrompt) {
            logged = true;
        } 
    }
    if(logged === true) {
        for (let i = 0; i < newsFeed.length; i++) {
            alert(newsFeed[i].username + "\n" + newsFeed[i].timeLine);
        }
       } else {
        alert("Your password or your user is wrong!");
    }
}