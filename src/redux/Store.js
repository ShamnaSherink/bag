import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slice/Productslice'
import WishlistReducer from './slice/Wishlistslice'
import registerReducer from './slice/Registerslice'


export const store = configureStore({
    reducer: {
     products:productReducer,
     Wishlist:WishlistReducer,
     register:registerReducer
    },
  })