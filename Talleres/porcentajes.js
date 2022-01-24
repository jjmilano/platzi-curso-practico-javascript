function Descuentos(precio,descuento){
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio*porcentajePrecioConDescuento)/100

return precioConDescuento;
}

// function descuentoMagico(){
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;

//     const inputDiscount = document.getElementById("InputDiscount");
//     const discountValue = inputDiscount.value;

//     const precioConDescuento = Descuentos(priceValue,discountValue);

//     const resultP = document.getElementById("resultP");
//     resultP.innerText = "El precio con descuento son : $" + precioConDescuento;
// }


function descuentoMagico(){
    const coupons =[
        "Cupon123",
        "Cupon234",
        "Cupon567",
    ];
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const counponValue = inputCoupon.value;
   
        let descuento;
        switch(counponValue){
        case coupons[0]:
            descuento = 15;
        break;
        case coupons[1]:
            descuento = 30;
        break;
        case coupons[2]:
            descuento =25;
        break;
        }

    const precioConDescuento = Descuentos(priceValue,descuento);
    const resultP= document.getElementById("resultP");
    resultP.innerText = "el precio con descuento son $" + precioConDescuento;
}