import React from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  Divider, 
  Button, 
  Stack 
} from '@mui/material';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

const CartSummary = ({total}:{total:number}) => {
  const summaryData = [
    { label: 'Total', value: `${total} AED` },
    { label: 'Tax', value: '1.6 AED' },
    { label: 'Total Cost', value: `${total + (1.6 * total)} AED`, bold: true },
  ];

  return (
    <Box sx={{ width: 320, mt: 4,mx: 'auto' }}>
      {/* Total Cost Card */}
      <Card
        variant="outlined"
        sx={{
          borderRadius: 4,
          overflow: 'hidden',
          border: '1px solid #e0e0e0',
          boxShadow: '0px 4px 20px rgba(0,0,0,0.05)',
          background: 'linear-gradient(to bottom, #fff5f5, #ffffff)',
        }}
      >
        <Box sx={{ p: 2, bgcolor: 'rgba(255, 255, 255, 0.5)' }}>
          <Typography sx={{ color: '#4A3B8D', fontWeight: 'bold', fontSize: '1.1rem' }}>
            Cart Total Cost
          </Typography>
        </Box>
        
        <Divider />

        <Stack divider={<Divider flexItem />}>
          {summaryData.map((item, index) => (
            <Box 
              key={index} 
              sx={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                p: 2,
                // Apply a slightly different background to the last row for emphasis
                bgcolor: item.bold ? 'rgba(240, 248, 255, 0.3)' : 'transparent'
              }}
            >
              <Typography sx={{ color: '#4A3B8D', fontWeight: item.bold ? 'bold' : 500 }}>
                {item.label}
              </Typography>
              <Typography sx={{ color: '#4A3B8D', fontWeight: 'bold' }}>
                {item.value}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Card>

      {/* Proceed Button */}
      <Button
        fullWidth
        variant="contained"
        endIcon={<ShoppingCartCheckoutIcon />}
        sx={{
          mt: 3,
          py: 1.5,
          borderRadius: 1,
          bgcolor: '#f05a41', // Matching the orange/coral color
          fontSize: '1rem',
          fontWeight: 'bold',
          textTransform: 'none', // Keeps "Proced" (or Proceed) as typed
          letterSpacing: 1,
          '&:hover': {
            bgcolor: '#d94d35',
          },
        }}
      >
        Proced
      </Button>
    </Box>
  );
};

export default CartSummary;