import { FC } from 'react';
import s from './Feed.module.css';

const Card: FC = ({ children }) => {
  return <div className={s.feedContainer}>{children}</div>;
};

export default Card;
