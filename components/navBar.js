import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import styled from "@emotion/styled";
import IconHeart from "../../../assets/IconHeart.png";
type Anchor = "left";
const Link = styled.a({
  width: "16vh",
  fontSize: "2vh",
  letterSpacing: 1,
  fontWeight: 300,
  margin: 0,
  color: "rgb(10,10,10)",
  textAlign: "left",
  textDecoration: "none",
});
const Icon = styled.img({
  width: 25,
  height: 25,
  marginTop: "-0.3vw",
  marginRight:'1vh'
});
const CountMarket = styled.button({
  margin: 0,
  background: "transparent",
  padding: 0,
  height: 25,
  width: 25,
  border: "1px solid rgb(10,10,10)",
  display: "flex",
  alignItems: " center",
  justifyContent: "center",
  borderRadius: 200,
  fontWeight: 400,
  fontSize: 13,
});
const dataNav = [
  { name: "ABOUT", url: "/about" },
  { name: "MEN", url: "/SearchProduct" },
  { name: "WOMEN", url: "/SearchProduct" },
  { name: "EXPLORE", url: "/PrincipalPage" },
  { name: "CONTACT", url: "/contact" },
];
const ContainerIcons = styled.div({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  paddingLeft:'2vh'
});
export default function MenuMobile({ toggleDrawer, state }: any) {
  const list = (anchor: Anchor) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ContainerIcons>
            <div>
              <Link href="/wishlist">
                <Icon src={IconHeart} />
              </Link>
            </div>
            <div>
              <Link href="/cart">
                <CountMarket
                  aria-label="My cart"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <p style={{ margin: 0 }}>0</p>
                </CountMarket>
              </Link>
            </div>
          </ContainerIcons>
        </ListItem>
        {dataNav.map((text, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <Link href={text.url}>
                <ListItemText primary={text.name} />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
        <Divider />
      </List>
    </Box>
  );

  return (
    <div>
      {(["left"] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
