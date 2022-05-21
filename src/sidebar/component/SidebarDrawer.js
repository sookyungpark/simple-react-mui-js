import PropTypes from "prop-types"
import React from "react"
import {withStyles, createStyles} from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'

const styles = (theme) => createStyles({
  drawer: {
    width: theme.drawer.width,
    flexShrink: 0,
  },
  drawerPaper: {
    width: theme.drawer.width,
  }
});

const SidebarDrawer = ({classes, children, opened}) => {
  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={opened}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {children}
    </Drawer>
  );
}

SidebarDrawer.propTypes = {
  classes: PropTypes.object,
  opened: PropTypes.bool
}

export default withStyles(styles)(SidebarDrawer)