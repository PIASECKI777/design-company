
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Container, Toolbar, IconButton,  
        Box, Typography} from '@mui/material';
import Button from '@mui/material/Button';       
//import {makeStyles} from '@mui/styles';


/*
const useStyles = makeStyles((theme) => ({
     root: {
      flexGrow: 1
     },
     menuButton: {
      marginRight: theme.spacing(1)
     },
     title: {
      flexGrow: 1      
     }
}))

*/

function MenuMui() {
//  const classes = useStyles();

  return (
    <>
    <div className="App">
      <AppBar position= 'fixed'>
        <Container fixed>
          <Toolbar>
            <IconButton edge= 'start'
                        color='inherit'
                        aria-label= 'menu'
                        className= 'icon-button'>
              <MenuIcon/>
            </IconButton>
            <Typography variant='h6' className= 'typography'> WEB DEVELOPER BLOG</Typography>
            <Box  mr= {3}>
              <Button color='inherit' variant= 'outlined'>Log InNNNNN</Button>
            </Box>
            <Button color='secondary' variant= 'contained'>Sign Up</Button>
          </Toolbar>
        </Container>
      </AppBar>

    </div>
    
    <div className='dudu'>DUDUDUDUDU</div>
    </>
  );
}

export default MenuMui;
