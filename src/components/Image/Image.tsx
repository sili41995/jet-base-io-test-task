import { FC } from 'react';
import { IProps } from './Image.types';

const Image: FC<IProps> = ({ alt = 'image', ...otherProps }) => (
  <img alt={alt} {...otherProps} />
);

export default Image;
