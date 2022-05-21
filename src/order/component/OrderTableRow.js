import React from 'react'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'

import TableRow from "@material-ui/core/TableRow"
import TableCell from "@material-ui/core/TableCell/TableCell"

const styles = _ => ({
  container: {
    height: "10vh"
  }
})

const OrderTableRow = ({classes, order}) => {
  return (
    <TableRow className={classes.container} key={order.id}>
      <TableCell>{order.id}</TableCell>
      <TableCell>{order.userId}</TableCell>
      <TableCell>{order.status}</TableCell>
      <TableCell>{order.createdAt? new Date(order.createdAt).toISOString(): ""}</TableCell>
      <TableCell>{order.updatedAt? new Date(order.updatedAt).toISOString(): ""}</TableCell>
      <TableCell>{order.deliveryStartedAt? new Date(order.deliveryStartedAt).toISOString(): ""}</TableCell>
      <TableCell>{order.completedAt? new Date(order.completedAt).toISOString(): ""}</TableCell>
    </TableRow>
  )
}

OrderTableRow.propTypes = {
  order: PropTypes.object
}

export default withStyles(styles)(OrderTableRow)