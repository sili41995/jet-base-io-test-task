import { FC } from 'react';
import { List, ListItem } from './NumbersList.styled';
import { IProps } from './NumbersList.types';

const NumbersList: FC<IProps> = ({ numbers }) => (
  <List>
    {numbers.map((number) => (
      <ListItem key={number}>{number}</ListItem>
    ))}
  </List>
);

export default NumbersList;
