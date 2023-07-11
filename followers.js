function followers(input) {
    let commands = input.shift();
    let facebook = {};
    let counter = 0;
    let likesCounter = 0;

    while (commands !== 'Log out') {
        let lineArgs = commands.split(': ');
        let command = lineArgs[0];
        let username = lineArgs[1];

        switch (command) {
            case 'New follower':
                if (!facebook.hasOwnProperty(username)) {
                    facebook[username] = {
                        likes: Number(0),
                        comments: Number(0),
                    }
                    counter++;
                }
                break;
            case 'Like':
                let countLikes = Number(lineArgs[2]);
                if (facebook.hasOwnProperty(username)) {
                    facebook[username].likes += countLikes;
                } else {
                    facebook[username] = {
                        likes: Number(countLikes),
                        comments: Number(0),
                    }
                    counter++;
                }
                break;
            case 'Comment':
                if (facebook.hasOwnProperty(username)) {
                    facebook[username].comments += Number(1);
                } else {
                    facebook[username] = {
                        likes: 0,
                        comments: Number(1),
                    }
                    counter++;
                }
                break;
            case 'Blocked':
                if (facebook.hasOwnProperty(username)) {
                    delete facebook[username];
                    counter--;
                } else {
                    console.log(`${username} doesn't exist.`);
                }
                break;
        }
        commands = input.shift();
    }


    console.log(`${counter} followers`);

    for (let username in facebook) {
        likesCounter += Number(facebook[username].likes);
        //console.log(likesCounter);
        //  let likesCount = facebook[username].likes + facebook[username].comments;
        // console.log(facebook[username].comments);
        console.log(`${username}: ${facebook[username].likes + facebook[username].comments}`);
    }
}
followers(["Like: Katy: 3",
"Comment: Katy",
"New follower: Bob",
"Blocked: Bob",
"New follower: Amy",
"Like: Amy: 4",
"Log out"]);

// followers(["Blocked: Amy",
//     "Comment: Amy",
//     "New follower: Amy",
//     "Like: Tom: 5",
//     "Like: Ellie: 5",
//     "Log out"]);
