// 1  

// let arr1 = [1, 2];
// let arr2 = [3, 4];
// let arr3 = [5, 6];

// let combinedArray = arr1.concat(arr2, arr3);

// console.log(combinedArray);

// 2

// let array = [-1, -2, -3, 4];
// let result = array.some(function(item) {
//   return item > 0;
// });
// console.log(result);


// 3 

// var array = [23, 45, 32, 5, 87, 7, 3, 98];
// array.sort(function(a, b) {
//   return a - b;
// });
// array.shift();
// console.log(array);

// 4 

let divElement = document.createElement('div');
divElement.setAttribute('class', 'wrapper');

let imgElement = document.createElement('img');
imgElement.setAttribute('src', 'https://techvccloud.mediacdn.vn/2018/11/23/js-15429579443112042672363-crop-1542957949936317424252.png');
imgElement.setAttribute('alt', 'js-image');

let hElement = document.createElement('h2');
hElement.textContent = "javascript tittle javascript tittle";
hElement.style.color = "#ff0000";
hElement.style.fontSize = "30px";

divElement.appendChild(imgElement);
divElement.appendChild(hElement);

document.getElementById('wrapper-box').appendChild(divElement);
