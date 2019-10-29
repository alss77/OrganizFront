import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  card: {
    maxWidth: 400,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 30,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Group(val) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2" className={classes.title}>
          {val.title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {val.author}
        </Typography>
        <Typography variant="body2" component="p">
          {val.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Modifier</Button>
      </CardActions>
    </Card>
  );
}