/* 
ให้เขียน Function ที่ชื่อว่า findNumberIndex ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 2 ตัวคือ numbers และ targetNumber
        1. numbers เป็น Array ที่บรรจุตัวเลข
        2. targetNumber เป็น Number ที่บรรจุตัวเลขที่ต้องการค้นหา
    - Function นี้จะค้นหาว่า numbers มี targetNumber อยู่หรือไม่ และ Return ค่าออกมาดังนี้:
        - หากพบให้ Return หมายเลข Index ของ targetNumber
        - หากไม่พบให้ Return -1
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here

function findNumberIndex(numbers, targetnumber) {
    let i = numbers.indexOf(targetnumber);
    return i; 
}

// function findNumberIndex(numbers, targetnumber) {
//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] === targetnumber) {
//             return i;  
//         }
//     }
//     return -1;  
// }

const numbers1 = [10, 30, 5, 20, 55];
console.log(findNumberIndex(numbers1, 55)); // 4

const numbers2 = [300, -145, 200, 0, 100];
console.log(findNumberIndex(numbers2, 2)); // -1