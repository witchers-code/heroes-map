import { FC } from 'react';
import s from './Card.module.css';

interface HeroeProps {
  name: string;
  avatar: string;
  description: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Card: FC<HeroeProps> = ({
  name = 'Andriy',
  avatar = '/link-to-photo',
  description = 'Опис...',
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <>
      <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={s.cardContainer}
      >
        <p>{name}</p>
        <p>{avatar}</p>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Card;
