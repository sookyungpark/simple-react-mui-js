import PropTypes from "prop-types"
import {createStyles, withStyles} from "@material-ui/core/styles"
import React from "react"
import IconButton from "@material-ui/core/IconButton"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"

const styles = (theme) => createStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
})

const SidebarHeader = ({classes, handleClickClose}) => {
  return (
    <div className={classes.container}>
      <IconButton onClick={handleClickClose}>
        <ChevronLeftIcon/>
      </IconButton>
    </div>
  )
}

SidebarHeader.propTypes = {
  classes: PropTypes.object,
  handleClickClose: PropTypes.func
}

export default withStyles(styles)(SidebarHeader)