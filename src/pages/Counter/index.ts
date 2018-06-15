import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StoreState, AppDispatch } from 'src/store';
import * as actions from './actions';
import CounterPage from './view';

interface StateProps {
  count: number;
}

interface DispatchProps {
  increment: () => void;
  decrement: () => void;
  double: () => void;
}

function mapStateToProps(state: StoreState): StateProps {
  return {
    count: state.counter.count,
  };
}

function mapDispatchToProps(dispatch: AppDispatch): DispatchProps {
  return bindActionCreators(
    {
      increment: actions.increment,
      decrement: actions.decrement,
      double: actions.double,
    },
    dispatch,
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterPage);
