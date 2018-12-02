import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const { dialog } = require('electron').remote;
import styles from './Town.css';
import routes from '../constants/routes';

export default class Town extends Component {
  props;
  timer;

  componentDidMount() {
    this.simulateDay();
  };

  componentWillUnmount() {
    clearTimeout(this.timer);
  };

  simulateDay() {
    if (!this.props.paused) {
      this.props.infect();
      this.timer = setTimeout(this.simulateDay.bind(this), this.props.delay);
    }
  };

  toggleSimulation() {
    if (this.props.paused) {
      /* Unpausing, so continue simulation */
      this.timer = setTimeout(this.simulateDay.bind(this), this.props.delay);
    }
    
    this.props.toggleSimulation();
  };

  setDelay(delay) {
    if (delay <= 5000 && delay >= 500)
      this.props.setDelay(delay);
  };

  render() {
    const {
      infect,
      day,
      houses,
      zombies,
      results,
      paused,
      delay
    } = this.props;
    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <Link alt="To overview" className={styles.button} to={routes.HOME}>
              <i className="fa fa-arrow-left fa-3x" />
            </Link>
            <a
              alt={paused ? 'Unpause' : 'Pause'}
              className={styles.button}
              onClick={this.toggleSimulation.bind(this)}>
              <i className={`fa fa-${paused ? 'play' : 'pause'} fa-3x`} />
            </a>
            <a
              alt="Slower"
              className={`${styles.button} ${delay + 250 > 5000 ? styles.buttonDisabled : ''}`}
              onClick={this.setDelay.bind(this, delay + 250)}>
              <i className="fa fa-backward fa-3x" />
            </a>
            <a
              alt="Faster"
              disabled={delay >= 5000}
              className={`${styles.button} ${delay - 250 < 500 ? styles.buttonDisabled : ''}`}
              onClick={this.setDelay.bind(this, delay - 250)}>
              <i className="fa fa-forward fa-3x" />
            </a>
          </div>
          <div>
            Iteration #{results.length + 1}
          </div>
        </div>

        <div>
          {houses.map((house, index) => {
            return (
              <div
                className={`${styles.house} ${house ? styles.infected : ''}`}
                key={index} />
            )
          })}
        </div>

        <div className={`${styles.footer}`}>
          {day > 0 &&
            <div className={styles.dayCounter}>
              <i className="fa fa-calendar-alt fa-1x" />
              Day {day}
            </div>
          }

          {day === 0 && 'Starting new simulation'}
        </div>
      </div>
    );
  }
}
