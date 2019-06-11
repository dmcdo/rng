function randInt (min,max) {
    return Math.floor( Math.random() * ((max+1)-min) + min );
}

function randIntArray (width, min, max, allowRepeats = true) {
    let result = [];

    if (allowRepeats) {
        for (let i = 0; i < width; i++) {
            let currentNum = randInt(min,max);
            result.push(currentNum);
        }
    }

    else {
        let numbersGenerated = 0;
        while (numbersGenerated < width) {
            let currentNum = randInt(min,max);
            if (!result.includes(currentNum)) {
                result.push(currentNum);
                numbersGenerated++;
            }
        }
    }

    return result;
}

function randIntBlock (min, max) {
    let block = randInt(min, max);
    let width = String(max).length;
    return pad(block, width);
}

// Pads 0s (or z) in front of number
function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}