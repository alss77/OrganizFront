import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 2,
    marginBottom: 2,
  },
  header: {
    backgroundColor: 'purple',
  },
  list: {
    width: 500,
    backgroundColor: 'green',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
    overflow: 'auto',
    maxHeight: 200,
    marginBottom: 5,
  },
  listSection: {
    backgroundColor: 'inherit',
    position: 'center',
  },
  ul: {
    backgroundColor: 'green',
    padding: 0,
    width: '100%',
  },
}));

function DashBoard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardHeader
        title="Bonjour NOM + PRENOM"
        subheader="Vous trouverez ici vos tâches et groupes auquel vous appartenez"
      />
      <CardContent>
        <List className={classes.list} subheader={<li />}>
          <ul className={classes.ul}>
            <ListSubheader className={classes.header}>Liste de vos Groupes</ListSubheader>
            {[0, 1, 2, 4, 5, 6, 7].map((item) => (
              <ListItem alignItems="center" key={`item-${item}`}>
                <ListItemAvatar>
                  <Avatar>{`${item}`}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </List>
        <List className={classes.list} subheader={<li />}>
          <ul className={classes.ul}>
            <ListSubheader className={classes.header}>Liste de vos Tâches</ListSubheader>
            {[0, 1, 2, 4, 5, 6, 7].map((item) => (
              <ListItem alignItem="flex-start" key={`item-${item}`}>
                <ListItemAvatar>
                  <Avatar>{`${item}`}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </List>
      </CardContent>
    </Card>
  );
}

export default DashBoard;
