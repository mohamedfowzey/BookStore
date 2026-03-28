import { Box, Container, Grid, Typography, Link, IconButton, Stack, Divider } from '@mui/material';
import { Facebook, LinkedIn, Twitter, YouTube } from '@mui/icons-material';
import footerLogo from '../../../assets/sample logo 1.svg'
import { BG_COLORS, TEXT_COLORS } from '../../../Constants/COLORS';

const Footer = () => {

  const sectionHeaderStyle = {
    fontWeight: 'bold',
    marginBottom: '20px',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: '#fff'
  };

  const linkStyle = {
    color: '#fff',
    display: 'block',
    marginBottom: '10px',
    textDecoration: 'none',
    fontSize: '0.9rem',
    '&:hover': { textDecoration: 'underline' }
  };

  return (
    <Box sx={{bgcolor: BG_COLORS.Primary, color: TEXT_COLORS.White, pt: 8, pb: 4 ,px:8}}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          
          {/* Brand Section */}
          <Grid  size={{xs:12,md:6}}>
            <Box sx={{ mb: 2 }}>
               {/* Replace with your actual Logo component or Image */}
              <img src={footerLogo} alt="Logo" style={{ width: '80px', marginBottom: '15px' }} />
              <Typography variant="body2" sx={{ lineHeight: 1.8, maxWidth: '300px' }}>
                Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </Typography>
            </Box>
            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
              <IconButton sx={{ color: 'white' }}><Facebook /></IconButton>
              <IconButton sx={{ color: 'white' }}><LinkedIn /></IconButton>
              <IconButton sx={{ color: 'white' }}><Twitter /></IconButton>
              <IconButton sx={{ color: 'white' }}><YouTube /></IconButton>
            </Stack>
          </Grid>

          {/* Company Links */}
          <Grid  size={{xs:6,md:3}}>
            <Typography variant="subtitle1" sx={sectionHeaderStyle}>Company</Typography>
            <Link href="#" sx={linkStyle}>Home</Link>
            <Link href="#" sx={linkStyle}>About Us</Link>
            <Link href="#" sx={linkStyle}>Books</Link>
            <Link href="#" sx={linkStyle}>New Release</Link>
            <Link href="#" sx={linkStyle}>Contact Us</Link>
            <Link href="#" sx={linkStyle}>Blog</Link>
          </Grid>

          {/* Important Links */}
          <Grid size={{xs:6,md:3}}>
            <Typography variant="subtitle1" sx={sectionHeaderStyle}>Important Links</Typography>
            <Link href="#" sx={linkStyle}>Privacy Policy</Link>
            <Link href="#" sx={linkStyle}>FAQs</Link>
            <Link href="#" sx={linkStyle}>Terms of Service</Link>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255, 255, 255, 0.2)' }} />

        {/* Bottom Bar */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
          <Typography variant="caption">
            © {new Date().getFullYear()} Arihant. All Rights Reserved.
          </Typography>
          <Stack direction="row" spacing={2} divider={<Typography variant="caption">|</Typography>}>
            <Link href="#" sx={{ color: 'white', fontSize: '0.75rem', textDecoration: 'none' }}>Privacy</Link>
            <Link href="#" sx={{ color: 'white', fontSize: '0.75rem', textDecoration: 'none' }}>Terms of Service</Link>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
