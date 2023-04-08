import { db } from "@/firebase";
import { collection, query, where, getDocs,doc} from "firebase/firestore";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Switch,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { ProfileInfoCard, MessageCard,StatisticsCard } from "@/widgets/cards";
import { platformSettingsData, conversationsData, projectsData } from "@/data";
import { Box, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState, useEffect } from "react";
import {useAuthValue} from "@/context/AuthContext"
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase";

const useStyles = makeStyles({
  boldText: {
    fontFamily: "Roboto ",
    fontWeight: 'bold',
    display: 'flex',
    color: "White",
    fontSize: 18,
  },
  content: {
    fontFamily: "Roboto ",
    display: 'flex',
    color: "Black",
    fontSize: 16,
  },
  halfColor:{
    background: 'linear-gradient(to bottom, #17a2e4  50%, white 50%)'
  },
});


export function Profile() {
  
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("authuser:", authUser);
      setUser(authUser);
     
      
      
      if(authUser== null || undefined)
      {
        console.log(authUser)
        navigate("/auth/sign-in", { replace: true });
      }
      sessionStorage.setItem('uid', authUser.uid);
      
    });

    return unsubscribe;
    
  });

  const classes = useStyles();
  const {currentUser} = useAuthValue();
  const uid =sessionStorage.getItem('uid');
  console.log(uid)


  const [users,setUsers] = useState([]);
  const userRef = query(collection(db,"users"),where('UID','==', uid));
 
  
  
  useEffect (()=> {
    const getUsers = async() => {
      const data = await getDocs(userRef);
      setUsers(data.docs.map((doc) => ({...doc.data()})));
    };
    getUsers();
  },[uid]);
 
  return(
   
    <div>
   
    {users.map((currentUser) => {
       return(
        <div>
        
         <div className="h-20">
          
         </div>
          
        
         <Card justify = "center"className="mx-3 -mt-16 mb-6 lg:mx-4">
        <CardBody className="p-4">
          <div>
            <div>
            <CardHeader variant="gradient" color="blue" className="mb-8 p-6 ">
            <Typography variant="h5" color="white">
                 Account Details
                </Typography>
                </CardHeader>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                   </Typography>
            </div>
          </div>
              <Box mt={4} border={1} borderRadius={0} borderColor="grey.400"  p={1} m={1} mx="auto" >
              <Box style={{ height: 12, borderTopRightRadius: 4, borderTopLeftRadius: 4 }} />
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}  >
                <Paper elevation={2} className={classes.halfColor} style={{ height: '100%' }}>
                    <Box p={7}>
                      <Typography variant="subtitle1" color="textSecondary" gutterBottom style={{paddingRight: '2px'}}>
                      <span className={classes.boldText}> &nbsp; Full Name</span>
                      &nbsp;&nbsp;
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                      <h1 className={classes.content}> &nbsp; {currentUser.FullName}</h1>
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}  >
                  <Paper elevation={2} className={classes.halfColor} style={{ height: '100%' }}>
                    <Box p={4}>
                      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                      <span className={classes.boldText}>&nbsp; Sex</span>
                      &nbsp;&nbsp;
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                      <span className={classes.content}> &nbsp; {currentUser.Sex}</span>
                       
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}  >
                  <Paper elevation={2} className={classes.halfColor} style={{ height: '100%' }}>
                    <Box p={4}>
                      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                      <span className={classes.boldText}>&nbsp; Matric</span>
                      &nbsp;&nbsp;
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                      <span className={classes.content}> &nbsp; {currentUser.Matric}</span>
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}  >
                  <Paper elevation={2} className={classes.halfColor} style={{ height: '100%' }}>
                    <Box p={4}>
                      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                      <span className={classes.boldText}>&nbsp; Programme</span>
                      &nbsp;&nbsp;
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                      <span className={classes.content}> &nbsp; {currentUser.Programme}</span>
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}  >
                  <Paper elevation={2} className={classes.halfColor} style={{ height: '100%' }}>
                    <Box p={4}>
                      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                      <span className={classes.boldText}>&nbsp; Programme (for registration)</span>
                      &nbsp;&nbsp;
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                      <span className={classes.content}> &nbsp; {currentUser.ProgrammeForReg}</span>
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}  >
                  <Paper elevation={2} className={classes.halfColor} style={{ height: '100%' }}>
                    <Box p={4}>
                      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                      <span className={classes.boldText}>&nbsp; Student Type</span>
                      &nbsp;&nbsp;
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                      <span className={classes.content}> &nbsp; {currentUser.StudentType}</span>
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}  >
                  <Paper elevation={2} className={classes.halfColor} style={{ height: '100%' }}>
                    <Box p={4}>
                      <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                      <span className={classes.boldText}>&nbsp; Student Status</span>
                      &nbsp;&nbsp;
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                      <span className={classes.content}> &nbsp;  {currentUser.StudentStatus}</span>
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
                <Grid item xs={12} sm={6}  >
                  <Paper elevation={2} className={classes.halfColor} style={{ height: '100%' }}>
                  <Box p={4}>
                  <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  <span className={classes.boldText}>&nbsp;Direct Entry</span>
                  &nbsp;&nbsp;
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                      <span className={classes.content}> &nbsp;{currentUser.DirectEntry}</span>
                      </Typography>
                    </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}  >
                  <Paper elevation={2} className={classes.halfColor} style={{ height: '100%' }}>
                  <Box p={4}>
                  <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  <span className={classes.boldText}>&nbsp; Study Year</span>
                  &nbsp;&nbsp;
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                      <span className={classes.content}> &nbsp; {currentUser.StudyYear}</span>
                      </Typography>
                    </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}  >
                  <Paper elevation={2} className={classes.halfColor} style={{ height: '100%' }}>
                  <Box p={4}>
                  <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                  <span className={classes.boldText}>&nbsp; Study Year(for Registration)</span>
                  &nbsp;&nbsp;
                      </Typography>
                      <Typography variant="body1" gutterBottom>
                      <span className={classes.content}> &nbsp; {currentUser.StudyYearForReg}</span>
                      </Typography>
                    </Box>
                    </Paper>
                </Grid>
                </Grid>
                </Box>
        </CardBody>
      </Card> 
      </div>
      );  

        
      
      })}
        
    </div>
  
  );
       
 

}

export default Profile;

      