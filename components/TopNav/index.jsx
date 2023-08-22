import { TopNavStyles } from "./style"
import { React, useState } from "react"
import { menuLinks } from "./menuLinks"
import {
  AppBar,
  Box,
  Button,
  Fab,
  Fade,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useScrollTrigger
} from "@mui/material"
import {
  KeyboardArrowUp,
  Search,
  ShoppingBasket,
  Sort
} from "@mui/icons-material"
import Link from "next/link"
import PropTypes from "prop-types"


function ScrollTop(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor',
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: 'center',
      })
    }
  }

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 30, right: 30, zIndex: 100 }}
      >
        {children}
      </Box>
    </Fade>
  )
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
}

export const TopNav = (props) => {
  const [anchorElNav, setAnchorElNav] = useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  return (
    <TopNavStyles>
      <AppBar sx={{ background: 'transparent' }}>
        <Toolbar id="back-to-top-anchor" className="toolbar-align">
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            aria-controls="nav-menu"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
          >
            <Sort />
          </IconButton>
          <Menu
            id="nav-menu"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            {menuLinks.map((menuItem) => (
              <MenuItem key={menuItem.id}>
                <Link href={menuItem.linkPath}>
                  {menuItem.link}
                </Link>
              </MenuItem>
            ))}
          </Menu>
          <Typography
            variant="p"
            component="div"
          >
          FREE SHIPPING OVER $35
          </Typography>
          <Box>
            <IconButton
              size="large"
              edge="end"
              aria-label="search"
            >
              <Search />
            </IconButton>
            <Link
              href="/basket"
            >
              <IconButton
                size="large"
                edge="end"
                aria-label="search"
              >
                <ShoppingBasket />
              </IconButton>
            </Link>
          </Box>  
        </Toolbar>
      </AppBar>
      <ScrollTop {...props}>
        <Fab size="large" aria-label="scroll back to top" className='scroll-top-fab'>
          <KeyboardArrowUp />
        </Fab>
      </ScrollTop>
    </TopNavStyles>
  )
}