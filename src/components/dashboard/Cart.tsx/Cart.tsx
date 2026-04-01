import { Box, Grid } from "@mui/material";
import CartList from "./CartList/CartList";
import CartSummary from "./cartSummary/CartSummary";
import { BG_COLORS, TEXT_COLORS } from "../../../Constants/COLORS";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  decrement,
  decrementByAmount,
  increment,
} from "../../../Redux/CartSlice";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

const cartItems: CartItem[] = [
  {
    id: 1,
    title: "My Book Cover",
    price: 10,
    quantity: 0,
    image: "https://via.placeholder.com/60x80/FF5252/FFFFFF?text=BOOK",
  },
  {
    id: 2,
    title: "My Book Cover",
    price: 10,
    quantity: 0,
    image: "https://via.placeholder.com/60x80/FF5252/FFFFFF?text=BOOK",
  },
  {
    id: 3,
    title: "My Book Cover",
    price: 10,
    quantity: 0,
    image: "https://via.placeholder.com/60x80/FF5252/FFFFFF?text=BOOK",
  },
];

export default function Cart() {
  const dispatch = useDispatch();
  const [CartItems, setCartItems] = useState<CartItem[]>([]);
  const totalCost = CartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  function incrementQuantity(id: number) {
    dispatch(increment());
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }

  function decrementQuantity(id: number) {
    const q: number | undefined = CartItems.find(
      (item) => item.id === id,
    )?.quantity;
    if (q && q > 0) {
      dispatch(decrement());
    }

    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      }),
    );
  }
  function removeItem(id: number) {
    const q: number | undefined = CartItems.find(
      (item) => item.id === id,
    )?.quantity;
    dispatch(decrementByAmount(q));

    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  const gradient =
    "linear-gradient(to right, " +
    BG_COLORS.PrimaryLight +
    ", " +
    BG_COLORS.SecondaryLight +
    ")";
  useEffect(() => {
    const getCartItems = () => {
      setCartItems(cartItems);
    };
    getCartItems();
  }, []);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          py: 4,
          backgroundImage: gradient,
          textAlign: "center",
          color: TEXT_COLORS.Primary, // Corrected the gradient syntax
        }}
      >
        {/* {location.pathname} */}
        Home / Cart
      </Box>
      <Grid container sx={{ p: 2, pt: 4 }}>
        <Grid size={{ md: 7, sm: 12 }}>
          <CartList
            gradient={gradient}
            CartItems={CartItems}
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            removeItem={removeItem}
          ></CartList>
        </Grid>
        <Grid size={{ md: 5, sm: 12 }}>
          <Box>
            <CartSummary total={totalCost}></CartSummary>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
