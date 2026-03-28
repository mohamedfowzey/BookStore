import { 
  Box, 
  Typography, 
  Container, 
  Grid, 
  Button, 
  TextField, 
  InputAdornment, 
  Card, 
  CardMedia, 
  CardContent, 
//   Divider,
  Stack,
  IconButton
} from '@mui/material';
import { 
  MailOutline, 
  Facebook, 
  Twitter, 
  Instagram, 
  ArrowForward 
} from '@mui/icons-material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BooksStack from '../../../assets/booksStack.png'
import { BG_COLORS, TEXT_COLORS } from '../../../Constants/COLORS';
import image1 from '../../../assets/articles/image1.jpg'
import image2 from '../../../assets/articles/image2.jpg'
import image3 from '../../../assets/articles/image3.jpg'

// Custom theme to match the image's color palette
const theme = createTheme({
  palette: {
    primary: { main: BG_COLORS.Secondary }, // Dark Blue
    secondary: { main: BG_COLORS.Primary }, // Vibrant Orange/Red
    // background: { default: BG_COLORS.SecondaryLight },
  },
  
  },
);

const BookStoreUI = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default', pb: 8 }}>
        
        {/* 1. HERO / PROMO SECTION */}
        <Container maxWidth="lg" sx={{ py: 4,px:6,backgroundColor:'white'}}>
          <Box sx={{ 
            bgcolor: BG_COLORS.PrimaryLight, 
            borderRadius: 4, 
            p: { xs: 4, md: 8 }, 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            position: 'relative'
          }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h4" color="primary" gutterBottom>
                All books are 50% off now!<br />
                <Typography component="span" variant="h4" color="secondary">
                  Don't miss such a deal!
                </Typography>
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 4, maxWidth: 400 }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac.
              </Typography>

              {/* Countdown Timer */}
              <Stack direction="row" spacing={3} sx={{ mb: 4 }}>
                {[ {v: '768', l: 'DAYS'}, {v: '01', l: 'HOUR'}, {v: '27', l: 'MINT'}, {v: '55', l: 'SEC'} ].map((item) => (
                  <Box key={item.l} textAlign="center">
                    <Typography variant="h5" color="secondary" sx={{ fontWeight: 'bold' }}>{item.v}</Typography>
                    <Typography variant="caption" color="text.disabled" sx={{ fontWeight: 'bold' }}>{item.l}</Typography>
                  </Box>
                ))}
              </Stack>

              {/* Slider Dots */}
              <Stack direction="row" spacing={1}>
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'secondary.main' }} />
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#e0e0e0' }} />
                <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: '#e0e0e0' }} />
              </Stack>
            </Box>

            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'center', mt: { xs: 4, md: 0 } }}>
              <img 
                src={BooksStack} 
                alt="Book Stack" 
                style={{ width: '100%' }} 
              />
            </Box>
          </Box>
        </Container>

        {/* 2. NEWSLETTER SECTION */}
        <Container maxWidth="lg" sx={{ pb: 6,position:'relative',backgroundColor:BG_COLORS.PrimaryLight}}>
          <Box sx={{ 
            bgcolor: '#f4511e', 
            borderRadius: 2, 
            p: { xs: 4, md: 6 },
            textAlign: 'center', 
            color: 'white',
            position:'relative' 
          }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
              Subscribe to Our Newsletter
            </Typography>
            <Typography variant="body2" sx={{ mb: 4, opacity: 0.9, maxWidth: 400, mx: 'auto' }}>
Sed eu feugiat amet, libero ipsum enim pharetra hac dolor sit amet, consectetur. Elit adipiscing enim pharetra hac.            </Typography>

            <Box sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', sm: 'row' }, 
              maxWidth: 500, 
              mx: 'auto', 
              bgcolor: 'white', 
              p: 0.5, 
              borderRadius: 1, 
              position:'absolute',
              bottom:'-26px',
              left:'calc(50% - 170px)'
              
            }}>
              <TextField 
              
                variant="standard" 
                placeholder="youremail123@gmail.com"
                fullWidth
                InputProps={{ 
                  disableUnderline: true,
                  startAdornment: (
                    <InputAdornment position="start" sx={{ pl: 2 }}>
                      <MailOutline color="disabled" fontSize="small" />
                    </InputAdornment>
                  ),
                  sx: { fontSize: '0.875rem' }
                }}
                sx={{ py: 1 }}
              />
              <Button 
                variant="contained" 
                disableElevation 
                sx={{ 
                  bgcolor: '#f4511e', 
                  '&:hover': { bgcolor: '#d84315' },
                  px: 4,
                  borderRadius: 0.5,
                  fontWeight: 'bold',
                  fontSize: '0.75rem'
                }}
              >
                SUBSCRIBE
              </Button>
            </Box>
          </Box>
        </Container>

        {/* 3. LATEST ARTICLES SECTION */}
        <Container maxWidth="lg" sx={{backgroundColor:BG_COLORS.SecondaryLight}}>
          <Box textAlign="center" sx={{ my: 6 ,backgroundColor:BG_COLORS.SecondaryLight}}>
            <Typography variant="body2" sx={{ fontWeight: 'bold', color: 'text.disabled', letterSpacing: 2 }}>
              READ OUR ARTICLES
            </Typography>
            <Typography 
              variant="h3" 
              color={TEXT_COLORS.Primary} 
              sx={{ 
                mt: 1, 
                fontWeight: 'bold',
                display: 'inline-block',
                pb: 1,
                px: 2
              }}
            >
              Latest Articles
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {[1, 2, 3].map((item) => (
              <Grid  size={{ xs:12, md:4}} key={item}>
                <Card elevation={0} sx={{ bgcolor: 'transparent',borderRadius:'none' , }}>
                  <CardMedia
                    component="img"
                    height="240"
                    image={item==1?image1:item == 2?image2:image3}
                    sx={{  mb: 2 }}
                  />
                  <CardContent sx={{ p: 0 }}>
                    <Typography variant="caption" sx={{ fontWeight: 'bold', color: 'text.disabled' }}>
                      2 Aug, 2021
                    </Typography>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'primary.main', mt: 1, lineHeight: 1.3 }}>
                      Reading Books Always Makes The Moments Happy
                    </Typography>
                    <Stack direction="row" spacing={1} sx={{ mt: 2,justifyContent:'flex-end' }}>
                      <IconButton size="small" sx={{ p: 0, color: 'text.disabled' }}><Facebook fontSize="inherit" /></IconButton>
                      <IconButton size="small" sx={{ p: 0, color: 'text.disabled' }}><Twitter fontSize="inherit" /></IconButton>
                      <IconButton size="small" sx={{ p: 0, color: 'text.disabled' }}><Instagram fontSize="inherit" /></IconButton>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box textAlign="center" sx={{ mt: 6 }}>
            <Button 
              variant="outlined" 
              color="primary" 
              endIcon={<ArrowForward fontSize="small" />}
              sx={{ 
                borderRadius: 0, 
                px: 4, 
                py: 1, 
                fontWeight: 'bold', 
                fontSize: '0.75rem',
                borderWidth: 2,
                '&:hover': { borderWidth: 2 }
              }}
            >
              READ ALL ARTICLES
            </Button>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default BookStoreUI;
