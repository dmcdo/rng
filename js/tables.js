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
    if (sort) sortNumber(nums);
    let HTML = '<table class="numList">';
        HTML += '<tr>'; // Numbers will occupy one inline row

            for (let i = 0; i < nums.length; i++) { // For each number

                if (boldRepeats) { // Identify repeats
                    let filteredNumsArray = nums.filter(num => num === nums[i]).length;
                    if (filteredNumsArray > 1) // If more than one instance of the current number in array
                        HTML += '<td class="listElem listElemRepeat">' + nums[i] + '</td>'; // Bold cell
                    else
                        HTML += '<td class="listElem">' + nums[i] + '</td>'; // Normal cell
                }

                else { // Don't identify repeats
                    HTML += '<td>' + nums[i] + '</td>'; // Normal cell
                }

            }
        HTML += '</tr>';
    HTML += '</table>';
    return HTML;
}

function sortNumber(numArray) {
    return numArray.sort((a, b) => a - b); // For ascending sort
    // numArray.sort((a, b) => b - a); // For descending sort
}

// Pads 0s (or z) in front of number
function pad(n, width, z) {
    z = z || '0';
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}
