import { FC } from 'react';
import { Counter } from '../../components/Counter';
import s from './App.module.scss';

const App: FC = () => {
  return (
    <div>
      <h1 className={s.h1}>Apptest</h1>
      <Counter />
    </div>
  );
};

export default App;
