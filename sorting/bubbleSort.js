console.log('We are listening from bubble sort file');

function swap(arr, xp, yp) {
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}

// An optimized version of Bubble Sort
function bubbleSort(arr, n) {
    let i, j;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }
}

/* Function to print an array */
function printArray(arr, size) {
    let i;
    for (i = 0; i < size; i++) console.log(arr[i] + ' ');
    console.log('\n');
}

// Driver program to test above functions
let arr = [5, 1, 4, 2, 8];
let n = 5;
console.log('UnSorted array: \n');
printArray(arr, n);

bubbleSort(arr, n);
console.log('Sorted array: \n');
printArray(arr, n);
