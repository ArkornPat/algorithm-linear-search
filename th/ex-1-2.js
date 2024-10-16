/* 
ให้เขียน Function ที่ชื่อว่า findIfProductsExist ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 2 ตัวคือ products และ targetProduct
        1. products เป็น Array ของ Object ที่บรรจุรายชื่อสินค้า โดย Object แต่ละอันจะมี Key 5 ตัวได้แก่ id, name , price, category และ zone
        2. targetProduct เป็น String ที่บรรจุชื่อสินค้าที่ต้องการค้นหา
    - Function นี้จะค้นหาว่า products มี targetProduct อยู่หรือไม่ และ Return ค่าออกมาดังนี้:
        - หากพบให้ Return หมายเลข Index ของ targetProduct
        - หากไม่พบให้ Return -1
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ด้านล่าง
*/

// Start coding here

const products = [
  { id: 2, name: "Desk Chair", price: 300, category: "Furniture", zone: "C" },
  { id: 8, name: "Keyboard", price: 100, category: "Electronics", zone: "E" },
  { id: 1, name: "Monitor", price: 400, category: "Electronics", zone: "E" },
  { id: 10, name: "Running Shoes", price: 90, category: "Clothing", zone: "H" },
];

function findIfProductsExist(products, targetProduct) {
    let i = products.findIndex(product => product.name === targetProduct);
    return i;
}

// function findIfProductsExist(products, targetProduct) {
//     for (let i = 0; i < products.length; i++) {
//         if (products[i].name === targetProduct) {
//             return i;  
//         }
//     }
//     return -1;  
// }

console.log(findIfProductsExist(products, "Running Shoes")); // 3
console.log(findIfProductsExist(products, "Pepsi")); // -1
