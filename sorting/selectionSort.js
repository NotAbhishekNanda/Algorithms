console.log('Here is the demo cod for selection sort');

function swap(arr, xp, yp) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

function selectionSorted(arr, n) {
    let i, j, min_idx;
    for (i = 0; i < n - 1; i++) {
        min_idx = i;
        for (j = i + 1; j < n; j++) if (arr[j] < arr[min_idx]) min_idx = j;

        // Swap the found minimum element with the first element
        swap(arr, min_idx, i);
    }
}

function arrayPrint(arr, size) {
    let i;
    for (i = 0; i < size; i++) console.log(arr[i] + ' ');
}

let arrayInput = [6, 5, 4, 2, 1];
let n = arrayInput.length;
selectionSorted(arrayInput, n);
arrayPrint(arrayInput, n);
