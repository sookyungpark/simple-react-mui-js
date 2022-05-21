import React from 'react'
import PropTypes from 'prop-types'
import SidebarDrawer from "../../sidebar/component/SidebarDrawer"
import List from "@material-ui/core/List"
import SidebarItem from "../../sidebar/component/SidebarItem"
import {useHistory} from "react-router"
import {useTranslation} from "react-i18next"
import SidebarFooter from "../component/SidebarFooter"
import SidebarHeader from "../component/SidebarHeader"
import {useDispatch} from "react-redux"
import {changeLanguage} from "../../app/actions"

const SidebarContainer = ({opened, handleClickClose}) => {
  const {t} = useTranslation()
  const history = useHistory()

  const dispatch = useDispatch()

  const handleChangeLanguage = (language) => {
    dispatch(changeLanguage(language))
  }

  return (
    <div>
      <SidebarDrawer opened={opened}>
        <SidebarHeader
          handleClickClose={handleClickClose}
        />
          <List>
            <SidebarItem
              key={'sidebar-menu-dashboard'}
              text={t('sidebar_menu_dashboard')}
              handleClick={() => history.push('/')}
            />
            <SidebarItem
              key={'sidebar-menu-orders'}
              text={t('sidebar_menu_orders')}
              handleClick={() => history.push('/orders')}
            />
          </List>
        <SidebarFooter
          handleChangeLanguage={handleChangeLanguage}
        />
      </SidebarDrawer>
    </div>
  )
}

SidebarContainer.propTypes = {
  classes: PropTypes.object,
  opened: PropTypes.bool,
  handleClickClose: PropTypes.func
}

export default SidebarContainer;