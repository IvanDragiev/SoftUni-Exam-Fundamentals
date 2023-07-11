function decryptingCommands(input) {
    let decryptString = input.shift();


    let commands = input.shift();

    while (commands !== 'Finish') {
        let lineArgs = commands.split(' ');
        let command = lineArgs[0];

        switch (command) {
            case 'Replace':
                let currentChar = lineArgs[1];
                let newChar = lineArgs[2];
                decryptString = decryptString.replace(currentChar, newChar);
                console.log(decryptString);
                break;
            case 'Cut':
                let startIndex = Number(lineArgs[1]);
                let endIndex = Number(lineArgs[2]);
                if (startIndex > 0 && endIndex > 0 && startIndex < decryptString.length && endIndex < decryptString.length) {
                    decryptString = decryptString.slice(0, startIndex) + decryptString.slice(endIndex + 1);
                    console.log(decryptString);
                } else {
                    console.log("Invalid indices!");
                }

                break;
            case 'Make':
                let casing = lineArgs[1];
                if (casing === 'Upper') {
                    decryptString = decryptString.toUpperCase();
                    console.log(decryptString);
                } else if (casing === 'Lower') {
                    decryptString = decryptString.toLowerCase();
                    console.log(decryptString);
                }

                break;
            case 'Check':
                let stringToCheck = lineArgs[1];
                if (decryptString.includes(stringToCheck)) {
                    console.log(`Message contains ${stringToCheck}`);
                } else {
                    console.log(`Message doesn't contain ${stringToCheck}`);
                }

                break;
            case 'Sum':
                let startIndexSum = Number(lineArgs[1]);
                let endIndexSum = Number(lineArgs[2]);

                if (startIndexSum > 0 && startIndexSum < decryptString.length && endIndexSum > 0 && endIndexSum < decryptString.length) {
                    let substringToSum = decryptString.substring(startIndexSum, endIndexSum + 1);
                    substringToSum = substringToSum.split('');
                    let sum = 0;
                    for (let i = 0; i < substringToSum.length; i++) {
                        let charCode = substringToSum[i].charCodeAt(0);
                        sum += charCode;
                    }
                    console.log(sum);
                } else {
                    console.log("Invalid indices!");
                }
                break;
        }
        commands = input.shift();
    }
}
decryptingCommands(["ILikeSoftUni",
    "Replace I We",
    "Make Upper",
    "Check SoftUni",
    "Sum 1 4",
    "Cut 1 4",
    "Finish"]);
