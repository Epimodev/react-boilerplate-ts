import { createElement } from 'react';
import TimePage from 'src/pages/Time';
import CounterPage from 'src/pages/Counter';
import * as style from './style.scss';

interface Props {}

function App(props: Props) {
  return (
    <div className={style.container}>
      <TimePage />
      <CounterPage />
    </div>
  );
}

export default App;
