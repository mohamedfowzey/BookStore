import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  ButtonGroup,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import type { CartItem } from '../Cart';



const CartList = ({ gradient, CartItems, incrementQuantity, decrementQuantity, removeItem }: { gradient: string, CartItems: CartItem[], incrementQuantity: (id: number) => void, decrementQuantity: (id: number) => void, removeItem: (id: number) => void }) => {
  
  return (
    <TableContainer 
      component={Paper} 
      sx={{ 
        maxWidth: 800, 
        mt: 5, 
        borderRadius: 4, 
        boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
        overflow: 'hidden',
        background: gradient,
      }}
    >
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ color: '#4A3B8D', fontWeight: 'bold', mb: 1 }}>
          Products Detailes
        </Typography>
      </Box>

      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow sx={{ '& th': { borderBottom: '1px solid #e0e0e0', color: '#4A3B8D', fontWeight: 'bold' } }}>
            <TableCell>Num</TableCell>
            <TableCell colSpan={2}>Book</TableCell>
            <TableCell align="center">Amount</TableCell>
            <TableCell align="center">Cost</TableCell>
            <TableCell align="center">Subtotal</TableCell>
            <TableCell align="center"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {CartItems?.map((item, index) => (
            <TableRow key={item.id} sx={{ '& td': { border: 0 } }}>
              <TableCell sx={{ color: '#4A3B8D', fontWeight: 'bold' }}>
                {String(index + 1).padStart(2, '0')}.
              </TableCell>
              
              <TableCell sx={{ width: 80 }}>
                <Box
                  component="img"
                  src={item.image}
                  alt={item.title}
                  sx={{ width: 60, height: 80, borderRadius: 1, boxShadow: 2 }}
                />
              </TableCell>
              
              <TableCell sx={{ color: '#4A3B8D' }}>{item.title}</TableCell>
              
              <TableCell align="center">
                <ButtonGroup 
                  size="small" 
                  sx={{ 
                    bgcolor: '#3F3D89', 
                    borderRadius: 1,
                    '& .MuiButton-root': { color: 'white', borderColor: 'transparent', minWidth: 30 } 
                  }}
                >
                  <Button onClick={() =>{ decrementQuantity(item.id);}}>
                    <RemoveIcon fontSize="small"  /></Button>
                  <Button sx={{ bgcolor: 'white !important', color: '#3F3D89 !important', cursor: 'default' }}>
                    {item.quantity}
                  </Button>
                  <Button onClick={() => incrementQuantity(item.id)}><AddIcon fontSize="small" /></Button>
                </ButtonGroup>
              </TableCell>
              
              <TableCell align="center" sx={{ color: '#4A3B8D', fontWeight: '500' }}>
                {item.price} AED
              </TableCell>
              
              <TableCell align="center" sx={{ color: '#4A3B8D', fontWeight: '500' }}>
                {item.price * item.quantity} AED
              </TableCell>
              
              <TableCell align="center">
                <IconButton 
                  size="small" 
                  sx={{ 
                    border: '1px solid #3F3D89', 
                    borderRadius: 1, 
                    color: '#3F3D89',
                    '&:hover': { bgcolor: '#3F3D89', color: 'white' }
                  }}
                  onClick={() => removeItem(item.id)}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CartList;