import React, {Suspense} from 'react'
import PropTypes from 'prop-types'
import {Route, Switch} from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import routes from '../../routes'
import connect from "react-redux/es/connect/connect"
import {compose} from "redux"
import {withStyles, createStyles} from '@material-ui/core/styles'
import {closeSidebar, openSidebar} from "../actions"
import {createStructuredSelector} from "reselect"
import {createSidebarOpenedSelector} from "../selectors"
import {useInjectReducer, useInjectSaga} from "redux-injectors"
import saga from "../saga";
import reducer from "../reducer"
import HeaderContainer from "../../header/container/HeaderContainer";
import FooterContainer from "../../footer/container/FooterContainer";

const styles = (theme) => createStyles({
  root: {
    display: 'relative',
    height: "100vh"
  },
  content: {
    flexGrow: 1
  },
  page: {
    overflowY: "scroll"
  },
  contentShifted: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0
  },
  footer: {}
})

const Loader = () => {
  return (
    <div>
      <h3>loading...</h3>
    </div>
  );
};

const AppContainer = ({classes, sidebarOpened, openSidebar, closeSidebar}) => {

  useInjectReducer({"key": "global", reducer});
  useInjectSaga({"key": "global", saga});



  return (
    <React.Fragment>
      <div className={classes.root}>
        <CssBaseline/>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              exact
              path={route.path}
              render={renderProps => (
                <React.Fragment>
                  <Suspense fallback={<Loader/>}>
                    <div className={sidebarOpened ? classes.contentShifted : classes.content}>
                      <HeaderContainer
                        activePath={route.activePath || route.path}
                        sidebarOpened={sidebarOpened}
                        handleClickSidebarOpen={openSidebar}
                        handleClickSidebarClose={closeSidebar}
                      />
                      <div className={classes.page}>
                        <route.page {...renderProps} />
                      </div>
                      <FooterContainer/>
                    </div>
                  </Suspense>
                </React.Fragment>
              )}
            />
          ))}
        </Switch>
      </div>
    </React.Fragment>
  )
}

AppContainer.propTypes = {
  classes: PropTypes.object,
  sidebarOpened: PropTypes.bool
}

const mapStateToProps = createStructuredSelector({
  sidebarOpened: createSidebarOpenedSelector()
});

const mapDispatchToProps = (dispatch) => {
  return {
    openSidebar: () => dispatch(openSidebar()),
    closeSidebar: () => dispatch(closeSidebar())
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withStyles(styles), withConnect)(AppContainer)