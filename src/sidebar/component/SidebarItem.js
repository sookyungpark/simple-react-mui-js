import PropTypes from "prop-types";
import {withStyles} from "@material-ui/core/styles";
import React from "react";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const styles = _ => ({
  container: {
    padding: "10px 30px"
  }
})

const SidebarItem = (props) => {
  const { classes, key, text, handleClick } = props

  return (
    <ListItem
      className={classes.container}
      button key={key}
      onClick={handleClick}
    >
      <ListItemText primary={text}/>
    </ListItem>
  )
}

SidebarItem.propTypes = {
  key: PropTypes.string,
  text: PropTypes.string,
  handleClick: PropTypes.func,
}

export default withStyles(styles)(SidebarItem)