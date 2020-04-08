import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
// import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
// import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
// import blue from "@material-ui/core/colors/indigo";
// import grey from "@material-ui/core/colors/grey";
import Button from "@material-ui/core/Button";
// import SvgIcon from "@material-ui/core/SvgIcon";
import { Link } from "react-router-dom";
import SvgIcon from "@material-ui/core/SvgIcon";

// Import css
import "./NavigationBar.css";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  button: {
    fontSize: 12,
    fontFamily: "Comic Neue",
    backgroundColor: "#fafafa",
    margin: 10,
    "&:hover": {
      backgroundColor: fade("#9e9e9e", 1),
    },
    marginBottom: 10,
  },
  toolbar: {
    // height: "100%"
    backgroundColor: "#03a9f4",
    // borderBlockWidth: 20,
    // boxShadow: 10,
    // marginTop: 10,
    // textAlign: "center"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    fontSize: "150%",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: "#fafafa",
    marginBottom: -10,
    // marginInlineEnd: "30%"
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#81d4fa", 0.5),
    "&:hover": {
      backgroundColor: fade("#81d4fa", 0.2),
    },
    marginRight: theme.spacing(2),
    marginLeft: 1,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(4),
      width: "auto",
      marginBottom: -15,
    },
    marginBottom: -8,
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    marginBottom: -15,
    color: "#fafafa",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    marginBottom: -10,
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  mobileTitle: {
    fontSize: "150%",
    position: "relative",
    color: "white",
    marginRight: theme.spacing(10),
    marginLeft: 1,
    width: "100%",
    marginBottom: -10,
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  homebutton: {
    fontSize: "140%",
    marginBottom: -3,
  },
}));

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}
export default function HomapageCard() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem>
        <Button variant="contained" className={classes.button}>
          Default
        </Button>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          // color="#fafafa"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    // <div className={classes.grow}>
    <>
      {/* <AppBar position="absolute"> */}
      <Toolbar className={classes.toolbar}>
        <Link to={"/"}>
          <IconButton>
            <HomeIcon
              className={classes.homebutton}
              style={{ color: "white" }}
              onClick={console.log("hey")}
            />
          </IconButton>
        </Link>
        <Typography
          className={classes.title}
          variant="h6"
          noWrap
          href={"register"}
        >
          Mern Skeletonsssssss
        </Typography>
        {/* <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div> */}
        <div className={classes.grow} />
        <div className={classes.sectionDesktop}>
          {/* <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MailIcon />
            </Badge>
          </IconButton> */}
          {/* <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton> */}
          {/* <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton> */}

          {/* <Link to={"/"}>
            <Button className={classes.button}>Home</Button>
          </Link> */}
          <Link to={"/register"}>
            <Button className={classes.button}>Register</Button>
          </Link>
          <Link to={"/login"}>
            <Button className={classes.button}>Log in</Button>
          </Link>
        </div>
        <Typography className={classes.mobileTitle} variant="h6" noWrap>
          Mern Skeleton
        </Typography>
        <div className={classes.sectionMobile}>
          <IconButton
            style={{ color: "white" }}
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            // color="#212121"
          >
            <MoreIcon />
          </IconButton>
        </div>
      </Toolbar>
      {/* </AppBar> */}
      {renderMobileMenu}
      {renderMenu}
    </>
    // </div>
  );
}
