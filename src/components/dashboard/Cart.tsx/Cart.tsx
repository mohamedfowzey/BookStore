import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../../Redux/store'
import { Button } from '@mui/material'

export default function Cart() {
    const count = useSelector((state: RootState) => state.cart.quantity)
  const dispatch = useDispatch()
  return (<>
    <Button variant="contained" onClick={() => dispatch({ type: 'cart/increment' })}>
      Increment
    </Button>
    <div>Cart Quantity is : {count}</div>
    </>
  )
}
