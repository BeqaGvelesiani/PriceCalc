let usdPrice = Number(document.getElementById("usdPrice").innerText);
let usa2georgia = Number(document.getElementById("usa2georgia").innerText);
let price = Number(document.getElementById("price").value);
let shippingWeight = Number(document.getElementById("shippingWeight").value);

document.getElementById("price").addEventListener("keyup", () => {
  console.log("boom1");
  calc();
});

document.getElementById("shippingWeight").addEventListener("keyup", () => {
  console.log("boom2");
  calc();
});

function calc() {
  let a =
    Number(document.getElementById("shippingWeight").value) *
    usa2georgia *
    Number(document.getElementById("usdPrice").innerText);

  document.getElementById("shipping").innerText = Math.round(a);

  let b = Number(document.getElementById("shippingWeight").value) *
      usa2georgia *
      Number(document.getElementById("usdPrice").innerText) +
    Number(document.getElementById("usdPrice").innerText) *
      Number(document.getElementById("price").value);

  document.getElementById("sum").innerText = Math.round(b);
    
}
