function Descuentos(precio,descuento){
const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precio*porcentajePrecioConDescuento)/100

return precioConDescuento;
}
// solución normal intuitiva.

// function descuentoMagico(){
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;

//     const inputDiscount = document.getElementById("InputDiscount");
//     const discountValue = inputDiscount.value;

//     const precioConDescuento = Descuentos(priceValue,discountValue);

//     const resultP = document.getElementById("resultP");
//     resultP.innerText = "El precio con descuento son : $" + precioConDescuento;
// }

//// solución con array y switch.
// function descuentoMagico(){
//     const coupons =[
//         "Cupon123",
//         "Cupon234",
//         "Cupon567",
//     ];
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;

//     const inputCoupon = document.getElementById("InputCoupon");
//     const counponValue = inputCoupon.value;
   
//         let descuento;
//         switch(counponValue){
//         case coupons[0]:
//             descuento = 15;
//         break;
//         case coupons[1]:
//             descuento = 30;
//         break;
//         case coupons[2]:
//             descuento =25;
//         break;
//         }

//     const precioConDescuento = Descuentos(priceValue,descuento);
//     const resultP= document.getElementById("resultP");
//     resultP.innerText = "el precio con descuento son $" + precioConDescuento;
// }
// Funcion Error-first

// function descuentoMagico(){
//     const coupons =[
//         "Cupon123",
//         "Cupon234",
//         "Cupon567",
//     ];
//     const inputPrice = document.getElementById("InputPrice");
//     const priceValue = inputPrice.value;

//     const inputCoupon = document.getElementById("InputCoupon");
//     const counponValue = inputCoupon.value;
   
//         if (!coupons.includes(counponValue)){
//             alert("Epa epa, este cupon " + counponValue + " No es válido pajarito");
//         }else if (counponValue === "Cupon123"){
//             descuento =15;
//         }else if (counponValue=== "Cupon234"){
//             descuento = 25;
//         }else if (counponValue==="Cupon567"){
//             descuento = 35;
//         }

//     const precioConDescuento = Descuentos(priceValue,descuento);
//     const resultP= document.getElementById("resultP");
//     resultP.innerText = "el precio con descuento son $" + precioConDescuento;
// }


function descuentoMagico(){
    const coupons =[{
        name: "perrito",
        discount: 15,
    },
    {
        name:"gatito",
        discount:25,
    },
    {
        name:"lupito",
        discount: 55,
    },
    ];
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const counponValue = inputCoupon.value;
   
    const isCouponvalueValid = function (coupons){
        return coupons.name === counponValue;
    };
    const userCoupon = coupons.find(isCouponvalueValid);

    if (!userCoupon){
        alert("El cupon "+ counponValue + " no es valido");
    }else{

        const descuento = userCoupon.discount;
        const PrecioConDescuento = Descuentos(priceValue,descuento);
        const resultP= document.getElementById("resultP");
        resultP.innerText = "el precio con descuento son $" + PrecioConDescuento;
    }

    
    
}