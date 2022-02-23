import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        {missions.map(({ name, year, country, destination }, i) => (
          <MissionCard
            key={ name + i }
            name={ name }
            year={ year }
            country={ country }
            destination={ destination }
          />))}
      </div>
    );
  }
}
