import { useState,useEffect } from 'react';
import { FC } from 'react';
import s from './Form.module.css';

const Form: FC = (active) => {
  const [showForm, setshowForm] = useState(false);

  useEffect(() => {
    setshowForm(active);
  }, [active]);

  return (
    <>
      <div className={s.cardContainer}>
        <form className={showForm ? s.showForm : s.hiddenForm}>
          <input type="text" placeholder="Імя" />
          <br />
          <input type="text" placeholder="Фото" />
          <br />
          <input type="text" placeholder="Історія" />
        </form>
        <br />
        <button onClick={() => setshowForm(!showForm)}>Добавити героя</button>
      </div>
    </>
  );
};

export default Form;
