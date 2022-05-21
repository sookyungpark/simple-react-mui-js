import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'

const styles = _ => ({
  footer: {
    position: "absolute",
    right: "0",
    bottom: "0",
    width: "100%",
    height: "50px",
    paddingRight: "20px",
    textAlign: "right",
    textShadow: "0px 0px 1px black",
    color: "white",
  }
})

const Footer = ({ classes }) => {
  return (
    <footer className={classes.footer}>
      <span className={classes.addrTxt}>@COFFEESHOP ADMIN. ALL RIGHTS RESERVED.</span>
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Footer)

