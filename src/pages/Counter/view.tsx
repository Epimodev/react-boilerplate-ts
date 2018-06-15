import { createElement } from 'react';
import Icon from 'src/components/Icon';
import Title from 'src/components/Title';
import Button from 'src/components/Button';
import checkmarkIcon from 'src/icons/checkmark.svg';
import * as style from './style.scss';

interface Props {}

interface Props {
  count: number;
  increment: () => void;
  decrement: () => void;
  double: () => void;
}

function CounterPage(props: Props) {
  const { count, increment, decrement, double } = props;

  return (
    <div>
      <Title>Welcome to counter page</Title>
      <div>
        Count: {count}
        <Icon className={style.icon} href={checkmarkIcon} />
      </div>
      <Button onClick={increment}>Increment</Button>
      <Button onClick={decrement}>Decrement</Button>
      <Button onClick={double} isPrimary>
        Double
      </Button>
    </div>
  );
}

export default CounterPage;
