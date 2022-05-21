import PropTypes from "prop-types"
import {createStyles, withStyles} from "@material-ui/core/styles"
import React, {useState} from "react"
import {SUPPORTED_LANGUAGES} from "../../constants"
import LanguageIcon from '@material-ui/icons/Language'
import IconButton from "@material-ui/core/IconButton"
import Dialog from "@material-ui/core/Dialog"
import Button from "@material-ui/core/Button"
import {useTranslation} from "react-i18next"

const styles = (theme) => createStyles({
  container: {
    display: "table",
    position: "absolute",
    right: "0",
    bottom: "0",
    width: "100%",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
    textAlign: "right",
    color: "white"
  },
  buttonContainer: {
    display: "table-cell",
    verticalAlign: "middle"
  }
})
const ChangeLanguageDialog = ({opened, handleChangeLanguage, handleClose}) => {
  const {t} = useTranslation()

  return (
    <Dialog onClose={handleClose} aria-labelledby="change-language-dialog-title" open={opened}>
      <div>
      {SUPPORTED_LANGUAGES.map((language) => (
            <Button key={language} color="primary" onClick={() => handleChangeLanguage(language)}>{t(language)}</Button>
        ))}
      </div>
    </Dialog>
  );
}

ChangeLanguageDialog.propTypes = {
  opened: PropTypes.bool,
  currentLanguage: PropTypes.string,
  handleChangeLanguage: PropTypes.func,
  handleClose: PropTypes.func
}


const SidebarFooter = ({classes, handleChangeLanguage}) => {
  const [languageDialogOpened, setLanguageDialogOpened] = useState(false)

  return (
    <div className={classes.container}>
      <div className={classes.buttonContainer}>
        <IconButton onClick={() => setLanguageDialogOpened(true)}>
          <LanguageIcon/>
        </IconButton>
      </div>
      <ChangeLanguageDialog opened={languageDialogOpened}
                            handleChangeLanguage={handleChangeLanguage}
                            handleClose={() => setLanguageDialogOpened(false)} />
    </div>
  )
}

SidebarFooter.propTypes = {
  classes: PropTypes.object,
  handleChangeLanguage: PropTypes.func
}

export default withStyles(styles)(SidebarFooter)