import { createElement } from 'react';
import { storiesOf } from '@storybook/react';
import Clock from './index';

storiesOf('Clock', module).add('default clock', () => <Clock />);
