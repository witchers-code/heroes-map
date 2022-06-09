import s from './Map.module.css';
import { MapMatrix, Card, Feed, Form } from 'src/components';
import { useState } from 'react';

const Map: FC = () => {
  const arr = MapMatrix({});

  const Heroes = [
    {
      id: '0',
      name: 'Ivan',
      avatar: '/sol1.png',
      description: 'Історія',
      position: [2, 60],
    },
    {
      id: '1',
      name: 'Roman',
      avatar: '/sol2.png',
      description: 'Історія',
      position: [3, 12],
    },
    {
      id: '2',
      name: 'Валентин',
      avatar: '/heroes/sol1.png',
      description: 'Історія',
      position: [10, 30],
    },
    {
      id: '3',
      name: 'Андрій',
      avatar: '/heroes/sol1.png',
      description: 'Історія',
      position: [11, 30],
    },
    {
      id: '4',
      name: 'Максим',
      avatar: '/heroes/sol1.png',
      description: 'Історія',
      position: [10, 31],
    },
    {
      id: '5',
      name: 'Володимир',
      avatar: '/heroes/sol1.png',
      description: 'Історія',
      position: [40, 58],
    },
  ];

  const [ activeForm, setActiveForm] = useState(false);

  return (
    <div className={s.containerBody}>
      <div className={s.containerZoom}>
        <div className={s.gridRowMap}>
          {arr.map((row, index1) => {
            return row.map((heroe, index2) => {
              if (heroe === 0) {
                return (
                  <div
                    key={`${index1} ${index2}`}
                    className={`s.circleFrame${heroe}`}
                  ></div>
                );
              } else {
                const res = Heroes.filter(
                  (avatar) =>
                    avatar.position[0] === index1 &&
                    avatar.position[1] === index2,
                );
                if (res[0]?.avatar) {
                  return (
                    <div
                      key={`${index1} ${index2}`}
                      className={s.circleFramePhoto}
                      id={res[0].id}
                      //   style={{
                      //     backgroundImage: "url(" + `${require('/heroes/sol2.png')}` + ")",
                      //   }}
                    >
                      {/* <Image src={`/img/add-user.svg`} alt="avatar" width={5} height={5}/> */}
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={`${index1} ${index2}`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveForm(true);
                      }}
                      className={s.circleFrameAdd}
                    ></div>
                  );
                }
              } //first else
            });
          })}
        </div>

        <Feed>
          <Form active={activeForm}/>
          {Heroes.slice(0, 5).map((heroe) => (
            <Card
              {...heroe}
              key={`${heroe.id}-card`}
              onMouseEnter={() => {
                document
                  .getElementById(heroe.id)
                  .classList.add(`${s.zoomAvatar}`);
              }}
              onMouseLeave={() => {
                document
                  .getElementById(heroe.id)
                  .classList.remove(`${s.zoomAvatar}`);
              }}
            />
          ))}
        </Feed>
      </div>
    </div>
  );
};

export default Map;
