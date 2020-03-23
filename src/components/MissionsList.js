import React from "react";

const MissionsList = props => {
  return (
    <section className="missions-list">
      {props.error ? (
        <div className="error">{props.error}</div>
      ) : (
        <div>
          {props.missions.map(mission => (
            <div className="mission" key={mission.mission_id}>
              {mission.mission_name}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default MissionsList;


/* Tests

First Test:

Test that the component renders with empty props (when component mounts)
  - props.error: ''
  - prop.missions: []


Second Test:

Test that the component shows an error message when passed an error string
  - props.error: 'some error message string'
  - Check that the error div renders
  - Check (assert) that the mission list does not render


Third Test: aka the successful path

Test that the missions list renders when there is no error, and when
props.missions has data


*/