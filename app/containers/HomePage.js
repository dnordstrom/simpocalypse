import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';

function mapStateToProps(state) {
  let iterations = state.town.results.length;
  let totalDays = state.town.results.reduce((prev, curr) => prev + curr, 0);
  let averageDays = totalDays / iterations;

  return {
    iterations,
    days: averageDays
  };
}

export default connect(
  mapStateToProps
)(Home);
