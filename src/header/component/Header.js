import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"

const styles = _ => ({
  appbar: {
    backgroundColor: "transparent"
  },
  toolbar: {
    height: '50px',
    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.5), 20%, transparent), transparent"
  },
  titleMenu: {},
  titleContainer: {},
  titleLogo: {},
  titleLogoImage: {},
  menuIcon: {
    textShadow: "0px 0px 5px black"
  },
})

const Header = ({classes, handleClickSidebarOpen}) => {

  return (
    <AppBar position="fixed" className={classes.appbar} elevation={0}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={handleClickSidebarOpen}
        >
          <MenuIcon className={classes.menuIcon} color={"secondary"}/>
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

Header.propTypes = {
  classes: PropTypes.object,
  handleClickSidebarOpen: PropTypes.func
}

export default withStyles(styles)(Header)