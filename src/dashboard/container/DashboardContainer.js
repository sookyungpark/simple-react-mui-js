import React from 'react'
import {createStyles, withStyles} from '@material-ui/core/styles'

const styles = (theme) => createStyles({
  container: {

  },
  contents: {
    height: "100vh",
    backgroundImage: `url("https://source.unsplash.com/random?time=${Date.now()}")`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  }
})

const DashboardContainer = (props) => {
  return (
    <React.Fragment>
      <div className={props.classes.contents} />
    </React.Fragment>
  )
}

export default withStyles(styles)(DashboardContainer)
