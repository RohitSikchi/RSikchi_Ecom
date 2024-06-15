const cartValue = document.querySelector("#cartValue");

export const updateCartValue = (cartProducts) => {
    return (cartValue.innerHTML=`<i class="fa-solid fa-cart-arrow-down"> ${cartProducts.length}</i>`);
};