const getStoredCart = () => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        return JSON.parse(storedCart)
    }
    return [];
}
const saveCartToLocal = (cart) => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart',cartStringified)
 }
 
const addToLocalStorage = (id) => {
    const cart = getStoredCart();
    cart.push(id)
    saveCartToLocal(cart)
}
 export {addToLocalStorage,getStoredCart}