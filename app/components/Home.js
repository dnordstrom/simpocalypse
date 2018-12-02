import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Home.css';

export default class Home extends Component {
  props;

  render() {
    const {
      iterations,
      days
    } = this.props;
    let description;

    /* Show statistics if the simulation has been run */
    if (iterations) {
      description =
        `The simulation has been run ${iterations} ${iterations > 1 ? 'times' : 'time'}, and the average number of days to full RIP state is ${days % 1 == 0 ? days : `about ${Math.round(days)}`}.`
    } else {
      description = "The simulation has not been run, no stats available. :/"
    }

    return (
      <div className={styles.container} data-tid="container">
        <h1 className={styles.heading}>Simpocalypse</h1>

        <Link
          to={routes.TOWN}
          className={styles.button}>
          {iterations ? "Continue simulation" : "Start simulation"}
        </Link>
        
        <p className={styles.description}>
          {description}
        </p>
      </div>
    );
  }
}
