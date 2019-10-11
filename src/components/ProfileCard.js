import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { height, textAlign } from '@material-ui/system';
import { CardHeader, CardActionArea } from '@material-ui/core';

const useStyles = makeStyles({
    header: {
        alignContent: "center"
    },
    headtext: {
        textAlign: 'start',
        fontSize: 20
    },
    avatar: {
      margin: 2,
      width: 150,
      height: 150
    },
    media: {
        height: '50%',
      },
});

export default function ProfileCard() {
    const classes = useStyles();

  return (
    <Card style={{height: 400}}>
        <Container className={classes.header}>
         <Avatar className={classes.avatar} src="https://media.licdn.com/dms/image/C4D03AQFI8uKB9nzBSw/profile-displayphoto-shrink_800_800/0?e=1576108800&v=beta&t=qO8sarzqogO42OMj2a735JUDf4KGo5aaqOUasmw04IY" />
         <Typography className={classes.headtext}>El Bandito</Typography>
         </Container>
    </Card>
  );
}
