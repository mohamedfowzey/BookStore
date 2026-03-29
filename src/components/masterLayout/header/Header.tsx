import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Link,
  Stack,
  IconButton,
  Divider,
  Container,
  Badge,
  Tooltip,
} from "@mui/material";
import {
  Phone,
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  LocalMallOutlined,
  FavoriteBorderOutlined,
  LockOpenOutlined,
} from "@mui/icons-material";
import { BG_COLORS, TEXT_COLORS } from "../../../Constants/COLORS";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navLinks = [
    "HOME",
    "ABOUT US",
    "BOOKS",
    "NEW RELEASE",
    "CONTACT US",
    "BLOG",
  ];
  const navigate = useNavigate();
  return (
    <AppBar position="sticky" elevation={1} sx={{ bgcolor: "white" }}>
      {/* Top Bar (Dark Blue) */}
      <Box
        sx={{ bgcolor: BG_COLORS.Secondary, color: TEXT_COLORS.White, py: 0.5 }}
      >
        <Container maxWidth="xl">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Phone sx={{ fontSize: 16 }} />
              <Typography variant="body2" sx={{ fontWeight: 500 }}>
                +91 8374902234
              </Typography>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Facebook sx={{ fontSize: 18, cursor: "pointer" }} />
              <Instagram sx={{ fontSize: 18, cursor: "pointer" }} />
              <LinkedIn sx={{ fontSize: 18, cursor: "pointer" }} />
              <Twitter sx={{ fontSize: 18, cursor: "pointer" }} />
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Main Navigation Bar */}
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          {/* Logo Placeholder */}
          <Box
            sx={{
              width: 50,
              height: 50,
              bgcolor: "#e0e0e0",
              borderRadius: "50%",
            }}
          />

          {/* Nav Links */}
          <Stack
            direction="row"
            spacing={2}
            divider={
              <Divider
                orientation="vertical"
                flexItem
                sx={{
                  display: { sm: "none ", md: "block" },
                  height: 15,
                  my: "auto",
                }}
              />
            }
            alignItems="center"
          >
            {navLinks.map((item) => (
              <Link
                key={item}
                
                underline="none"
                sx={{
                  display: { sm: "none ", md: "block" },
                  fontSize: "0.85rem",
                  fontWeight: "bold",
                  color: item === "HOME" ? "#ff5722" : "#333", // Highlight Home in orange
                  "&:hover": { color: "#ff5722" },
                }}
              >
                {item}
              </Link>
            ))}
          </Stack>

          {/* Action Icons */}
          <Stack direction="row" spacing={1} alignItems="center">
            <Tooltip title="change Password">
              <IconButton
                onClick={() => {
                  navigate("/change-password");
                }}
                size="small"
              >
                <LockOpenOutlined />
              </IconButton>
            </Tooltip>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: 20, my: "auto", mx: 0.5 }}
            />
            <Tooltip title="cart">
              <Badge badgeContent={0} color="error">
                <IconButton size="small">
                  <LocalMallOutlined />
                </IconButton>
              </Badge>
            </Tooltip>
            <Divider
              orientation="vertical"
              flexItem
              sx={{ height: 20, my: "auto", mx: 0.5 }}
            />
            <Tooltip title="favorites">
              <IconButton size="small">
                <FavoriteBorderOutlined />
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
