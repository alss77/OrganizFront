import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import { green, blue } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: blue[500],
  },
}));

export default function RecipeReviewCard(val) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const color = ['yellow', 'orange', 'red'];

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const randomUrgency = () => {
    console.log(`id = ${val.id} / color = ${color[val.id % 3]}`);
    return (color[val.id % 3]);
  };

  return (
    <Card className={classes.card}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignItems="stretch"
      >
        <Grid item xs={1}>
          <div style={{ backgroundColor: randomUrgency(), height: '100%', width: '100%' }} />
        </Grid>
        <Grid item xs>
          <CardHeader
            avatar={(
              <Avatar aria-label="Task" className={classes.avatar}>
                {val.author[0]}
              </Avatar>
            )}
            action={(
              <IconButton className={classes.button} aria-label="delete">
                <DeleteIcon />
              </IconButton>
            )}
            title={val.title}
            subheader="Deadline: 15/10/19 (3 jours)"
          />
          <CardActions disableSpacing>
            <FormControlLabel
              control={(
                <GreenCheckbox
                  value="checkedA"
                />
              )}
              label="Done"
            />
            <FormControlLabel
              control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedB" />}
              label="Favoris"
            />
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {val.content}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
});