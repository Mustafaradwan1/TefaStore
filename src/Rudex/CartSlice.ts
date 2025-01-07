import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  stock: number;
}

interface CartState {
  items: CartItem[];
  itemsCount: number;
}

const getCartDataFromLocalStorage = () => {
  const usersData = JSON.parse(localStorage.getItem('usersData') || '[]');
  const StatusCheck = usersData.find((ele: any) => ele.status === true);

  if (StatusCheck) {
    return StatusCheck.cartData;
  }
  return [];
};


const initialState: CartState = {
  items: getCartDataFromLocalStorage(),  
  itemsCount: getCartDataFromLocalStorage().length, 
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
 
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const usersData = JSON.parse(localStorage.getItem('usersData') || '[]');
      const StatusCheck = usersData.find((ele: any) => ele.status === true);

      if (StatusCheck) {
        const existingItem = StatusCheck.cartData.find((item: any) => item.id === action.payload.id);

        if (existingItem) {
          if (existingItem.quantity < existingItem.stock) {
            existingItem.quantity += 1;
            localStorage.setItem('usersData', JSON.stringify(usersData));
          }
        } else {
          StatusCheck.cartData.push({ ...action.payload, quantity: 1 });
          localStorage.setItem('usersData', JSON.stringify(usersData));
          state.items = StatusCheck.cartData;
        }

        const updatedCartData = StatusCheck.cartData;
        state.itemsCount = updatedCartData.length;
      }
    },

  
    increaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity < item.stock) {
        item.quantity += 1;
        const usersData = JSON.parse(localStorage.getItem('usersData') || '[]');
        const StatusCheck = usersData.find((ele: any) => ele.status === true);
        if (StatusCheck) {
          const existingItem = StatusCheck.cartData.find((item: any) => item.id === action.payload);
          if (existingItem) {
            existingItem.quantity = item.quantity;
            localStorage.setItem('usersData', JSON.stringify(usersData));
          }
        }
      }
    },

   
    decreaseQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        const usersData = JSON.parse(localStorage.getItem('usersData') || '[]');
        const StatusCheck = usersData.find((ele: any) => ele.status === true);
        if (StatusCheck) {
          const existingItem = StatusCheck.cartData.find((item: any) => item.id === action.payload);
          if (existingItem) {
            existingItem.quantity = item.quantity;
            localStorage.setItem('usersData', JSON.stringify(usersData));
          }
        }
      }
    },


    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item, index) => index !== action.payload);
      const usersData = JSON.parse(localStorage.getItem('usersData') || '[]');
      const StatusCheck = usersData.find((ele: any) => ele.status === true);
      if (StatusCheck) {
        StatusCheck.cartData = state.items;
        localStorage.setItem('usersData', JSON.stringify(usersData));
      }
      state.itemsCount = state.items.length;
    },


    clearCart: (state) => {
      state.items = [];
      state.itemsCount = 0;
      const usersData = JSON.parse(localStorage.getItem('usersData') || '[]');
      const StatusCheck = usersData.find((ele: any) => ele.status === true);
      if (StatusCheck) {
        StatusCheck.cartData = [];
        localStorage.setItem('usersData', JSON.stringify(usersData));
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, decreaseQuantity, increaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
