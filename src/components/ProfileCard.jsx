import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  header: {
    alignContent: 'center',
  },
  headtext: {
    textAlign: 'start',
    fontSize: 20,
  },
  avatar: {
    margin: 2,
    width: 150,
    height: 150,
  },
  media: {
    height: '50%',
  },
});

export default function ProfileCard() {
  const classes = useStyles();

  return (
    <Card style={{ height: 400 }}>
      <Container className={classes.header}>
        <Avatar className={classes.avatar} src="https://media.licdn.com/dms/image/C4D03AQFI8uKB9nzBSw/profile-displayphoto-shrink_800_800/0?e=1576108800&v=beta&t=qO8sarzqogO42OMj2a735JUDf4KGo5aaqOUasmw04IY" />
        <Typography className={classes.headtext}>El Bandito</Typography>
      </Container>
    </Card>
  );
}
