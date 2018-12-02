import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Town from '../components/Town';
import * as TownActions from '../actions/town';

function mapStateToProps(state) {
  return {
    ...state.town
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TownActions, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Town);
