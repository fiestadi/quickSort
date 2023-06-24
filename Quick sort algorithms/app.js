//xanojskaja bashnia
function hanoiIterative(n, source, auxiliary, destination) {
   let stack = [];
   let state = {
     disks: n,
     source: source,
     auxiliary: auxiliary,
     destination: destination
   };
 
   stack.push(state); //dobavlenie el v konec massiva
 
   while (stack.length > 0) {
     state = stack.pop(); // udaliet poslednij element is massiva
 
     if (state.disks === 1) {
       console.log("Move disk from " + state.source + " to " + state.destination);
     } else {
       stack.push({
         disks: state.disks - 1,
         source: state.auxiliary,
         auxiliary: state.source,
         destination: state.destination
       });
 
       stack.push({
         disks: 1,
         source: state.source,
         auxiliary: state.auxiliary,
         destination: state.destination
       });
 
       stack.push({
         disks: state.disks - 1,
         source: state.source,
         auxiliary: state.destination,
         destination: state.auxiliary
       });
     }
   }
 }
 
//vizivaem funkciju
 hanoiIterative(3, "A", "B", "C");


 //quick sort *******************************
 function quickSort(arr) {
   if (arr.length <= 1) {
     return arr;
   }
 
   let pivot = arr[Math.floor(arr.length / 2)];
   let left = [];
   let right = [];
 
   for (let i = 0; i < arr.length; i++) {
     if (arr[i] < pivot) {
       left.push(arr[i]);
     } else if (arr[i] > pivot) {
       right.push(arr[i]);
     }
   }
 
   return [...quickSort(left), pivot, ...quickSort(right)];
 }
 
 // Example 
 let array = [5, 3, 8, 4, 2, 1, 6, 7];
 let sortedArray = quickSort(array);
 console.log(sortedArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8]