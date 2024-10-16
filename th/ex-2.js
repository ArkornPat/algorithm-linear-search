/* 
ให้เขียน Function ที่ชื่อว่า findAndShowProductDetail ซึ่งมีคุณสมบัติต่อไปนี้
    - รับ Parameter 3 ตัวคือ products ,targetProduct และ targetQuantity
        1. products เป็น Array ของ Object ที่บรรจุรายชื่อสินค้า โดย Object แต่ละอันจะมี Key 3 ตัวได้แก่ name , quantity และ zone
        2. targetProduct เป็น String ที่บรรจุชื่อสินค้าที่ต้องการค้นหา
        3. targetQuantity เป็น Number ที่บรรจุจำนวนสินค้าที่ต้องการซื้อ
    - Function นี้จะค้นหาว่า products มี targetProduct อยู่ตามจำนวนที่ต้องการซื้อหรือไม่ และ Return ค่าออกมาดังนี้:
        - หากพบ
            - กรณีที่มีสินค้าเหลืออยู่มากกว่าหรือเท่ากับ targetQuantity ให้ Return ข้อความ <Quantity> <targetProduct>(s) are available at Zone <zoneNumber>
            - กรณีที่มีสินค้าเหลืออยู่น้อยกว่า targetQuantity ให้ Return ข้อความ Sorry, we've got only <Quantity> <targetProduct>(s) available at Zone <zoneNumber>
        - หากไม่พบให้ Return ข้อความ We don't have <targetProduct>
    - เมื่อ Algorithm นี้ทำงาน จะต้องเห็นผลลัพธ์ดังนี้
*/

// Start coding here

const products = [
  { name: "Chocolate Milk", quantity: 10, zone: "A1" },
  { name: "Pepsi", quantity: 5, zone: "B2" },
  { name: "Water Bottle", quantity: 15, zone: "E2" },
  { name: "Headphones", quantity: 8, zone: "F3" },
  { name: "Backpack", quantity: 12, zone: "G4" },
];

// function findIfProductsAvailable(products ,targetProduct,targetQuantity){
//     for(let i = 0; i < products.length; i++){
//         if(products[i].name === targetProduct && targetQuantity <= products[i].quantity){

//             return `${targetQuantity} ${targetProduct}(s) are available at ${products[i].zone}`
            
//         }else if(products[i].name === targetProduct && targetQuantity > products[i].quantity){

//             return `Sorry, we've got only ${products[i].quantity} ${products[i].name}(s) available at ${products[i].zone}`
//         }
//     }
//     return `We don't have ${targetProduct}`
// }
function findIfProductsAvailable(products, targetProduct, targetQuantity) {
    const product = products.find(product => product.name === targetProduct);

    if (!product) {
        return `We don't have ${targetProduct}`;
    }

    if (targetQuantity <= product.quantity) {
        return `${targetQuantity} ${targetProduct}(s) are available at ${product.zone}`;
    } else {
        return `Sorry, we've got only ${product.quantity} ${product.name}(s) available at ${product.zone}`;
    }
}


console.log(findIfProductsAvailable(products, "Chocolate Milk", 3));
// 3 Chocolate Milk(s) are available at Zone A1

console.log(findIfProductsAvailable(products, "Pepsi", 10));
// Sorry, we've got only 5 Pepsi(s) available at Zone B2

console.log(findIfProductsAvailable(products, "Charger", 1));
// We don't have Charger
