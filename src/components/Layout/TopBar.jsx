/* eslint-disable @next/next/no-img-element */
import {
    AppBar,
    Toolbar,
    Box,
    Paper,
    InputBase,
    IconButton,
    Button,
    Hidden,
    makeStyles
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search';
import VideoCall from '@material-ui/icons/VideoCall';
import Apps from '@material-ui/icons/Apps';
import MoreVert from '@material-ui/icons/MoreVert';
import AccountCircle from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles((theme) => ({
    root: {
        boxShadow: 'none',
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: theme.palette.background.default,
    },
    toolbar: {
        minHeight: 56,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    logo: {
        cursor: 'pointer',
        height: 25,
        marginLeft: theme.spacing(3),
    },
    search: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      height: 35,
      width: 700,
    //   boxShadow: 'none'
    },
    input: {
      flex: 1,
    },
}))


export default function TopBar() {
    const classes = useStyles()

    return (
        <AppBar className={classes.root} color="default">
            <Toolbar className={classes.toolbar}>
                <Box display="flex" alignItems="center">
                    <MenuIcon />
                    <img
                        src="/new-youtube-logo.svg"
                        alt="logo"
                        className={classes.logo}
                    />
                </Box>

                <Hidden mdDown>
                    <Box>
                        <Paper component="form" className={classes.search}>
                            <InputBase 
                                className={classes.input}
                                placeholder="Pesquisar"
                                inputProps={{ 'aria-label': 'search google maps' }}
                            />
                            <IconButton
                                type="submit"
                                aria-label="search"
                            >
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Box>
                </Hidden>

                <Box display="flex">
                    <IconButton className={classes.icons}>
                        <VideoCall />
                    </IconButton>

                    <IconButton className={classes.icons}>
                        <Apps />
                    </IconButton>

                    <IconButton className={classes.icons}>
                        <MoreVert />
                    </IconButton>

                    <Button
                        color="secondary"
                        component="a"
                        variant="outlined"
                        startIcon={<AccountCircle />}
                    >
                        Fazer Login
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}