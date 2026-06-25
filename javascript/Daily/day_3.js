// let arr = [1,2,45, 44, 0, 100,3,4,5];
// // // arr.push(6);
// // // console.log(arr);
// // // console.log(arr.length);

// // // console.log(arr.slice(1,4));
// // // console.log(arr.toString());
// // // console.log(arr.shift());

// // let d = arr.map(x => x*2);
// // console.log(d)

// // let arr = ["hello", "of", "a", "ghsadkjhsl", "usdff"];
// // let fil = arr.filter((word) => word.length > 3);
// // console.log(fil);

// // console.log(arr.findIndex(x => x ==2));
// // console.log(arr.includes(76));
// // console.log(arr.unshift(10));
// // console.log(arr.splice(0,2,23));
// // console.log(arr.concat(7,8,9));
// // console.log(arr);

// // let arr = ["uydsuf", "bdsuybf","vusbdc", "nausdb"];
// // console.log(arr.join("-"));
// arr.sort();
// console.log(arr);
// console.log(arr.sort((a, b) => a - b));

// function fun(name , age){
//     return console.log("Regular function",age, name);
// }
// fun("Awanish", 21);


// let arrow = (name , age) =>{
//     return console.log("Arrow function : ", name , age)
// }
// arrow("Awanish", 21);

// const details = function(name, age){
//     return console.log("Details : ",name, age)
// }
// details("hello", 234);


// function print(){
//     console.log("Print");
// }
// print();

// let aPrint = () => {
//     console.log("A Print");
// }
// aPrint();

// let details = (fname, lname, age) => {
//     console.log(`${fname} ${lname} is ${age} years old`)
// }
// details("awanish","verma", 20);

function fetchJSONData() {
    fetch('./data.json')
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('Failed to fetch data:', error));
}
fetchJSONData();