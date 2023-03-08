import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';

interface Props {
  items: string[];
}

const SimpleList = ({ items }: Props): JSX.Element => (
  <List sx={{ listStyleType: 'disc', pl: 4, mb: 2 }}>
    {items.map((item, i) => (
      <ListItem key={i} sx={{ display: 'list-item', p: 0, m: 0 }}>
        <Typography variant="body1">{item}</Typography>
      </ListItem>
    ))}
  </List>
);

export default SimpleList;
