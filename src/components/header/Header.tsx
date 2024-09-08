import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink } from "react-router-dom";
import { styled } from "@mui/material/styles";

// decorator component on top of RouterLink
const StyledLink = styled(RouterLink)({
  textDecoration: "none",
  color: "inherit",
  flexGrow: 1,
});

//app bar = header, toolbar = container for components inside header
const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <StyledLink to="/">
          <Typography variant="h6">Educaid</Typography>
        </StyledLink>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
