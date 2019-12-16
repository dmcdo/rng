function HTMLRandNumTable (rows, cols, min, max) {
    let HTML = '<table class="table table-striped table-bordered">';
    for (let i = 0; i < rows; i++) { // Create each row
        HTML += '<tr>'; // Current row
            HTML += `<th>Row ${i+1}</th>`; // Row heading
            for (let ii = 0; ii < cols; ii++) { // Create each cell in the current row
                HTML += '<td>' + randIntBlock(min, max) + '</td>'; // Current cell
            }
        HTML += '</tr>';
    }
    HTML += '</table>';
    return HTML;
}

function HTMLRandNumList (length, min, max, boldRepeats = false, allowRepeats = true, sort = false) {
    let nums = randIntArray(length, min, max, allowRepeats);
    if (sort) nums.sort((a, b) => a - b);

    let HTML = '<table class="numList">';
        HTML += '<tr>'; // Numbers will occupy one inline row
            if (boldRepeats) {
                let instancesOf = countInstances(nums);

                nums.forEach(num => {
                    if (instancesOf[num] > 1)
                        HTML += '<td class="listElem listElemRepeat">' + num + '</td>';
                    else
                        HTML += '<td class="listElem">' + num + '</td>';
                });
            }
            else {
                nums.forEach(num => {
                    HTML += '<td class="listElem">' + num + '</td>';
                });
            }
        HTML += '</tr>';
    HTML += '</table>';
    return HTML;
}

// Pads 0s (or z) in front of number
function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

function countInstances(array) {
    let instancesOf = {};

    array.forEach(elem => {
        if (!instancesOf[elem])
            instancesOf[elem] = 1;
        else
            instancesOf[elem]++;
    });

    return instancesOf;
}
