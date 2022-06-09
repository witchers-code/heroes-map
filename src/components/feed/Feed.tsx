import { FC } from 'react';
import s from './Feed.module.css';

const Feed: FC = ({ children }) => {
  return <div className={s.feedContainer}>{children}</div>;
};

export default Feed;
