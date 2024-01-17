import React from "react";
import { Box } from "@mui/material";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FeedIcon from "@mui/icons-material/Feed";
import InfoIcon from "@mui/icons-material/Info";
import StarIcon from "@mui/icons-material/Star";
import CodeIcon from "@mui/icons-material/Code";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";

function Header() {
  const [state, setState] = React.useState({ open: false });

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ open });
    };
  const list = () => {
    return (
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          {["About", "Skills", "Portfolio", "Contact"].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? (
                    <InfoIcon />
                  ) : index === 1 ? (
                    <StarIcon />
                  ) : index === 2 ? (
                    <CodeIcon />
                  ) : (
                    <MailIcon />
                  )}{" "}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          <ListItem key="Resume" disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FeedIcon />
              </ListItemIcon>
              <ListItemText primary="Resume" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  };

  return (
    <div className="header">
      <IconButton
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          ":hover": {
            "& .MuiSvgIcon-root": {
              color: "secondary.main", // Use the secondary color from the theme
            },
          },
        }}
        aria-label="scroll down"
        onClick={() => {
          setState({ open: true });
        }}
      >
        <MenuIcon sx={{ fontSize: 42 }} color="primary" />
      </IconButton>
      <Drawer anchor="right" open={state.open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </div>
  );
}

export default Header;
