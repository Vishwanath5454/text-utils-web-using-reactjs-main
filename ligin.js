function sortString(str) {
    // Convert the string into an array of characters
    let arr = str.split('');
    // Bubble sort the array of characters
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the characters
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    // Convert the sorted array back to a string
    return arr.join('');
}
// Example usage
 let sortedString = sortString("gang");
console.log(sortedString);  // Output: "aggn"
// str="gang"
// arr=["a","g","g","n"]
// i=4
// aar length=4
// j=1
// inner arrlength=0
// temp=n
// sortedstr="aggn"


