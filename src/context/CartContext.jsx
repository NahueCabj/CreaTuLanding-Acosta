import { Filter } from "lucide-react";
import { createContext, useState } from "react";


export const CartContext = createContext()

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])

// todas las funciones que modifiquen ese array o logicas sobre el array

//Agregar item al carrito

const addItem = (item, qty)=>{
    if (isInCart(item.id)){
        const carritoActualizado = cart.map((prod)=>{
           if (item.id === prod.id){
            return {...prod, quantity: prod.quantity + qty}
           }else{
            return prod
           }
        })
        setCart(carritoActualizado)
    }
    else(
    setCart([...cart,{...item,quantity:qty}])
    )
}

//Borrar todo el carrito

const clear = () =>{
    setCart([])
}

//Eliminar un item

const removeItem = (id)=>{
    setCart(cart.filter((prod)=> prod.id !== id))
}

//esta o no

const isInCart = (id) =>{
    return cart.some((prod)=> prod.id === id)
}

//cantidad de items en el carrito
const cartQuantity = () => {
    return cart.reduce ((acc, prod)=> acc += prod.quantity,0)
}

//total a pagar
const total = () => {
    return cart.reduce ((acc,prod) => acc += (prod.price * prod.quantity), 0)
}

const itemQuantity = (id) => {
    const itemInCart = cart.find ((prod)=> prod.id === id)
    if(itemInCart){
        return itemInCart.quantity
    }else{
        return 0
    }
}

    return(
        <CartContext.Provider value={{cart, addItem, clear, removeItem, cartQuantity, total, itemQuantity}}>
            {children}
        </CartContext.Provider>
    )
}