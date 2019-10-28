import React from 'react';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowForward from '@material-ui/icons/ArrowForward';


function ListTodos() {
  function generate(element) {
    return [0, 1, 2].map((value) => React.cloneElement(element, {
      key: value,
    }));
  }

  const [dense] = React.useState(false);
  const [secondary] = React.useState(false);
  return (
    <Card>
      <List dense={dense}>
        {generate(
          <ListItem>
            <ListItemAvatar>
              <Avatar>
                <FolderIcon />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Single-line item"
              secondary={secondary ? 'Secondary text' : null}
            />
            <ListItemSecondaryAction style={{ marginRight: 40 }}>
              <IconButton>
                <ArrowForward />
              </IconButton>
            </ListItemSecondaryAction>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>,
        )}
      </List>
    </Card>
  );
}

export default ListTodos;
