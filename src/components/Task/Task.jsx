import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types/prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import BuildSharpIcon from '@material-ui/icons/BuildSharp';


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
    backgroundColor: red[500],
  },
}));

function Task(props) {
  const { taskcontent, tasktitle } = props;
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe" className={classes.avatar}>
            TS
          </Avatar>
        )}
        title={tasktitle}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {taskcontent}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="update">
          <BuildSharpIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

Task.propTypes = {
  taskcontent: PropTypes.string,
  tasktitle: PropTypes.string,
};

Task.defaultProps = {
  taskcontent: '',
  tasktitle: '',
}

export default Task;
