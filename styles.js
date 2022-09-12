import {makeStyles} from "@material-ui/core/styles";
const useStyles=makeStyles((theme)=>({
container:{
    backgroundColor: theme.palette.background.paper,
    padding:theme.spacing(8, 0 ,6)
},
icon:{
marginRight:'20px'
},
buttons:{
marginTop:'40px'
}  ,
cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  }, 
}));
export default useStyles