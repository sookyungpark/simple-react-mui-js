import React from 'react'
import PropTypes from 'prop-types'
import Header from "../component/Header"
import history from "../../history"
import CssBaseline from "@material-ui/core/CssBaseline"
import SidebarContainer from "../../sidebar/container/SidebarContainer"

const HeaderContainer = ({ sidebarOpened, handleClickSidebarOpen, handleClickSidebarClose }) => {

  return (
    <div>
      <CssBaseline/>
      <Header
        handleClickLogo={() => history.push('/admin')}
        handleClickSidebarOpen={handleClickSidebarOpen}
      />
      <SidebarContainer
        opened={sidebarOpened}
        handleClickClose={handleClickSidebarClose}
      />
    </div>
  )
};

HeaderContainer.propTypes = {
  sidebarOpened: PropTypes.bool,
  handleClickSidebarOpen: PropTypes.func,
  handleClickSidebarClose: PropTypes.func
}

export default HeaderContainer;