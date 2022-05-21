import PropTypes from "prop-types"
import {withStyles} from "@material-ui/core/styles"
import React from "react"

const styles = _ => ({
  container: {
    height: "100vh"
  }
})

const SidebarContent = ({classes, children}) => {
  return (
    <div className={classes.container}>
      {children}
    </div>
  )
}

SidebarContent.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(SidebarContent)