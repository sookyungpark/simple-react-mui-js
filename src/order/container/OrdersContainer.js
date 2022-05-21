import {useEffect, useState} from "react"
import {api} from "../../support/api"
import React from "react"
import {withStyles} from '@material-ui/core/styles'
import {useSnackbar} from "notistack"
import Table from "@material-ui/core/Table"
import {TableHead, TableBody, TableRow} from "@material-ui/core"
import TableCell from "@material-ui/core/TableCell"
import {Pagination} from "@material-ui/lab"
import OrderTableRow from "../component/OrderTableRow"
import {useTranslation} from "react-i18next"

const styles = _ => ({
  contents: {
    height: "100vh",
    width: "100%",
    display: "table",
    marginTop: 0
  },
  orders: {
    width: "100%",
    padding: "10vh 10vh",
    display: "table-cell",
    verticalAlign: "middle"
  }
})

const OrdersContainer = ({classes}) => {
  const TABLE_SIZE = 100

  const {t} = useTranslation();
  const [orders, setOrders] = useState([])
  const {enqueueSnackbar} = useSnackbar();

  const tablePageCount = 0;
  const changeTablePage = (e, page) => {
    fetch(page - 1, TABLE_SIZE)
    e.page = page;
  }

  const fetch = (page, size) => {
    api.get("/api/orders?page=" + page + "&size=" + size,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.data)
      .then(data => {
        if (data) {
          setOrders(data.orders)
        }
      })
      .catch(error => {
        enqueueSnackbar(t("get_orders_failure"))
      })
  }

  useEffect(() => {
    fetch(0, TABLE_SIZE)
  }, [])

  return (
    <React.Fragment>
      <div className={classes.contents}>
        <div className={classes.orders}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>{t('orders_table_id')}</TableCell>
                <TableCell>{t('orders_table_user_id')}</TableCell>
                <TableCell>{t('orders_table_status')}</TableCell>
                <TableCell>{t('orders_table_created_at')}</TableCell>
                <TableCell>{t('orders_table_updated_at')}</TableCell>
                <TableCell>{t('orders_table_delivery_started_at')}</TableCell>
                <TableCell>{t('orders_table_completed_at')}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((order, _) => (
                <OrderTableRow order={order} key={order.id}/>
              ))}
            </TableBody>
          </Table>
          <div>
            <Pagination count={tablePageCount} onChange={changeTablePage} showFirstButton showLastButton/>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default withStyles(styles)(OrdersContainer)