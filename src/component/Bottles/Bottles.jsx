import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import { addToLocalStorage, getStoredCart } from "../../utlity/utlity";
import Cart from "../Cart/Cart";


const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    // selected product state 
    const [carts, setCarts] = useState([]);

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    // load data from local Storage
    useEffect(() => {
        // console.log('length ',bottles.length)
        if (bottles.length > 0) {
            const storedCart = getStoredCart();
            // console.log(storedCart);
            const savedCart = [];
            for (const id of storedCart) {
                // console.log(id)
                // console.log(bottles)
                const bottle = bottles.find(bottle => bottle.id === id)
                if (bottle) {
                    savedCart.push(bottle)
                    
                }
                
            }
            console.log('saved cart', savedCart)
            setCarts(savedCart)
        }
},[bottles])
    
    
    const handleToCart = (product) => {
        console.log('clicked', product)
        const newCart = [...carts, product];
        setCarts(newCart)
        addToLocalStorage(product.id)
     }
    return (
        <>
            <div className="flex">
                {
                    carts.map(cart => <Cart
                        cart={cart}
                        key={cart.id}
                    ></Cart>)
                }
           </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
           
            {
                bottles.map(bottle => <Bottle
                    bottle={bottle}
                    key={bottle.id}
                    handleToCart={handleToCart}
                ></Bottle>)
            }
            
            </div>
            </>
    );
};

export default Bottles;