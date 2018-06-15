import { createElement, Component } from 'react';
import * as style from './style.scss';

interface Props {}

interface State {
  date: Date;
}

class Clock extends Component<Props, State> {
  intervalId: NodeJS.Timer | number = 0;

  constructor(props: Props) {
    super(props);

    this.state = {
      date: new Date(),
    };

    this.tic = this.tic.bind(this);
  }

  componentDidMount() {
    this.intervalId = setInterval(this.tic, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId as NodeJS.Timer);
  }

  tic() {
    this.setState({ date: new Date() });
  }

  render() {
    const { date } = this.state;

    return <div className={style.clock}>{date.toLocaleTimeString()}</div>;
  }
}

export default Clock;
