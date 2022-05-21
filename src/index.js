import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import App from './app/container/AppContainer'
import registerServiceWorker from './registerServiceWorker'

import {SnackbarProvider} from 'notistack'
import {I18nextProvider} from 'react-i18next'
import i18n from './i18n'

import configureStore from './configureStore'
import history from './history'
import {ConnectedRouter} from 'connected-react-router'
import {CookiesProvider} from "react-cookie";

const initialState = {}
const store = configureStore(initialState, history)
const colorTheme = {
  "dark": "#0a043c",
  "semiDark": "#03506f",
  "semiLight": "#dddddd",
  "light": "#ffffff"
}
const theme = createMuiTheme({
  palette: {
    primary: {
      light: colorTheme.light,
      main: colorTheme.semiDark,
      dark: colorTheme.dark,
      contrastText: colorTheme.semiLight
    },
    secondary: {
      light: colorTheme.light,
      main: colorTheme.light,
      dark: colorTheme.dark,
      contrastText: colorTheme.semiLight
    },
    background: {
      paper: colorTheme.light,
      default: colorTheme.light
    },
    text: {
      primary: colorTheme.dark,
      secondary: colorTheme.semiDark
    },
    textColor: colorTheme.dark
  },
  typography: {
    fontFamily: "'Raleway', sans-serif",
    useNextVariants: true
  },
  drawer: {
    width: 240
  },
  overrides: {
    MuiButton: {
      root: {
        padding: '7px 25px 9px'
      },
      raised: {
        color: colorTheme.light,
        'background-color': colorTheme.semiDark,
        '&:hover': {
          backgroundColor: colorTheme.semiLight
        }
      }
    },
    MuiSnackbarContent: {
      root: {
        padding: "14px",
        minWidth: "360px",
        '@media (min-width: 601px)': {
          minWidth: "360px"
        }
      },
      message: {
        padding: 0
      }
    },
    MuiChip: {
      root: {
        paddingLeft: '18px',
        paddingRight: '14px',
        height: '26px',
        backgroundColor: colorTheme.semiLight
      },
      label: {
        paddingLeft: '0',
        color: colorTheme.semiLight
      },
      deleteIcon: {
        width: '20px',
        height: '20px',
        fill: colorTheme.semiLight
      },
      deletable: {
        '&:focus': {}
      }
    },
    MuiSvgIcon: {
      root: {
        width: '20px',
        height: '20px'
      }
    },
    MuiIconButton: {
      root: {
        width: '20px',
        height: '20px'
      }
    },
    MuiFormControlLabel: {
      root: {
        marginLeft: 0,
        marginRight: '20px'
      },
      label: {
        marginLeft: '10px'
      }
    },
    MuiExpansionPanel: {
      root: {
        "&$expanded": {
          marginTop: '20px',
          marginBottom: '20px',
          transform: 'scale(1.02)'
        }
      }
    },
    MuiExpansionPanelSummary: {
      root: {
        "&$expanded": {
          borderBottom: '1px #e0e0e0 solid'
        }
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: '30px'
      }
    },
    MuiInputBase: {
      input: {
        padding: '6px 0 7px'
      }
    },
    MuiDivider: {
      root: {}
    },
    MuiSelect: {
      icon: {
        top: 'calc(50% -10px)'
      },
      select: {
        '&:focus': {
          backgroundColor: 'transparent'
        }
      }
    },
    MuiToolbar: {
      root: {
        '@media (min-width: 601px)': {
          minHeight: '48px'
        }
      }
    },
    MuiTableRow: {
      root: {
        'tbody:not(.noHover) &:not(.emptyRow):hover': {
          boxShadow:
            '0 4px 5px 0 rgba(0, 0, 0, 0.2), 0 3px 14px 3px rgba(0, 0, 0, 0.12), 0 8px 10px 1px rgba(0, 0, 0, 0.14)',
          background: 'none'
        }
      }
    },
    MuiTextField: {
      root: {}
    },
    MuiTableCell: {
      root: {
        paddingTop: 0,
        paddingBottom: 0
      }
    }
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <SnackbarProvider maxSnack={3}>
          <ConnectedRouter history={history}>
            <App/>
          </ConnectedRouter>
        </SnackbarProvider>
      </I18nextProvider>
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
)

registerServiceWorker()
