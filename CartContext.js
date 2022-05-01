import React, {createContext, useState,useEffect} from 'react';
import { getProduct } from './asset/data/Bestseller';
import auth from '@react-native-firebase/auth';

export const CartContext = createContext();

export function CartProvider(props) {
  

    const [items, setItems] = useState([]);
    const [user, setUser] = useState({});

    useEffect(async() => {
      setUser(auth().currentUser);
    },[])


  function addItemToCart(id) {
    
    const product = getProduct(id);
    
    setItems((prevItems) => {
    
        const item = prevItems.find((item) => (item.id == id));
      if(!item) {
          return [...prevItems, {
              id: product.id,
              qty: 1,
              product,
              totalPrice: product.price,
              orderStatus:'Pending'
          }];
      }
      else { 
          return prevItems.map((item) => {
            if(item.id == id) {
              item.qty++;
              item.totalPrice += product.price;
            }
            return item;
          });
      }
    });
}
function getItemsCount() {
      return items.reduce((sum, item) => (sum + item.qty), 0);
  }

  function getTotalPrice() {
      return items.reduce((sum, item) => (sum + item.totalPrice), 0);
  }  

  function removeItemFromCart(id) {
    setItems((prevItems) => {
      return prevItems.filter((item) => (item.id !== id));
    });
  }

  function increaseItemQuantity(id) {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if(item.id === id) {
          item.qty++;
          item.totalPrice += item.product.price;
        }
        return item;
      });

    });
  }



  function decreaseItemQuantity(id) {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if(item.id === id) {
          item.qty--;
          item.totalPrice -= item.product.price;
        }
        return item;
      });

    });

  }

  


  return (
    <CartContext.Provider 
      value={{user,items,setItems, getItemsCount, addItemToCart, getTotalPrice,removeItemFromCart,increaseItemQuantity,decreaseItemQuantity}}>
      {props.children}
    </CartContext.Provider>
  );
}