function easterEggs(input){
    let pattern = /[@|#]+(?<color>[a-z]{3,})[@|#]+[^A-Za-z0-9]*\/+(?<amount>\d+)\/+/gm;
    let exec = pattern.exec(input);
    
    while (exec) {
        let colorName = exec.groups.color;
        let amount = exec.groups.amount;
        
        console.log(`You found ${amount} ${colorName} eggs!`);

        exec = pattern.exec(input);
    }

}
easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
