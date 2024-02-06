import { FC } from 'react';
import { IProps } from './Title.types';
import { Text } from './Title.styled';

const Title: FC<IProps> = ({ text }) => <Text>{text}</Text>;

export default Title;
