function tableButtonClick () {
    let rows = document.getElementById('rows').value;
        rows = Number(rows);
    let cols = document.getElementById('cols').value;
        cols = Number(cols);
    let min = document.getElementById('block-min').value;
        min = Number(min);
    let max = document.getElementById('block-max').value;
        max = Number(max);

    let table = HTMLRandNumTable(rows, cols, min, max);
    document.getElementById('results-list').innerHTML = '';
    document.getElementById('results-table').innerHTML = table;
}

function listButtonClick () {
    let length = document.getElementById('length').value;
        length = Number(length);
    let min = document.getElementById('min').value;
        min = Number(min);
    let max = document.getElementById('max').value;
        max = Number(max);

    let disallowRepeats = document.getElementById('disallow-repeats').checked;
    let boldRepeats = document.getElementById('bold-repeats').checked;
    let sort = document.getElementById('sort-results').checked;

    let table = HTMLRandNumList(length, min, max, boldRepeats, !disallowRepeats, sort);
    document.getElementById('results-table').innerHTML = '';
    document.getElementById('results-list').innerHTML = table;
    document.getElementsByClassName('numList')[0].style.margin = '0px auto';
}

function swap () {
    // If being shown on the left, move to right
    if (document.getElementById('random-number-list-left').innerHTML) {
        let temp = document.getElementById('random-number-list-left').innerHTML;

        document.getElementById('random-number-list-left').innerHTML = '';
        document.getElementById('random-number-list-left').style.display = 'none';

        document.getElementById('random-number-list-right').innerHTML = temp;
        document.getElementById('random-number-list-right').style.display = '';
    }

    else { // If being shown on the right, move to left
        let temp = document.getElementById('random-number-list-right').innerHTML;

        document.getElementById('random-number-list-right').innerHTML = '';
        document.getElementById('random-number-list-right').style.display = 'none';

        document.getElementById('random-number-list-left').innerHTML = temp;
        document.getElementById('random-number-list-left').style.display = '';
    }
}