
const storeName = "Smart Shopping Store";
const vatRate = 0.18; 
const discountRate = 0.10; 

const items = [
    { name: "Rice", quantity: 2, price: 3000 },
    { name: "Sugar", quantity: 1, price: 2500 },
    { name: "Cooking Oil", quantity: 2, price: 4500 }
];

let subtotal = 0;

console.log("ITEM TOTALS");

for (const item of items) {
    item.total = item.quantity * item.price;
    subtotal += item.total;

    console.log(
        `${item.name}: ${item.quantity} x ` +
        `${item.price} RWF = ${item.total} RWF`
    )
const discount = subtotal >= 15000
    ? subtotal * discountRate
    : 0;


const taxableAmount = subtotal - discount;
const vat = taxableAmount * vatRate;


const finalAmount = taxableAmount + vat;


const amountPaid = Number("25000");


if (Number.isNaN(amountPaid) || amountPaid < 0) {
    console.log("Error: Invalid payment amount.");
} else if (amountPaid < finalAmount) {
    console.log("Insufficient payment.");
    console.log(
        `You need ${(
            finalAmount - amountPaid
        ).toFixed(2)} RWF more.`
    );
} else {
    const change = amountPaid - finalAmount;

    
    console.log("\n====== RECEIPT ======");
    console.log(storeName);
    console.log("---------------------");

    for (const item of items) {
        console.log(
            `${item.name} (${item.quantity}) - ` +
            `${item.total.toFixed(2)} RWF`
        );
    }

    console.log("---------------------");
    console.log(`Subtotal: ${subtotal.toFixed(2)} RWF`);
    console.log(`Discount: ${discount.toFixed(2)} RWF`);
    console.log(`VAT (18%): ${vat.toFixed(2)} RWF`);
    console.log(`Amount Due: ${finalAmount.toFixed(2)} RWF`);
    console.log(`Amount Paid: ${amountPaid.toFixed(2)} RWF`);
    console.log(`Change: ${change.toFixed(2)} RWF`);
    console.log("=====================");
}


const qualifiesForDiscount = subtotal >= 15000;

console.log(
    `Discount eligible: ${qualifiesForDiscount}`
);