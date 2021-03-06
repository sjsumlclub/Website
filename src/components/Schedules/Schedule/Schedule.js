import React from 'react';
import styles from './styles.module.css';

const toDateString = (date) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  const datestring = date.toLocaleDateString('en-US', options);
  return datestring;
};

export default function Schedule(props) {
  const { schedule } = props;
  return (
    <div className="col-lg-6 col-md-6 col-sm-6">
      <div className="single-feature d-flex flex-row pb-30">
        <div className={styles.icon}>
          <i
            className={
              schedule.date.getTime() < Date.now()
                ? 'fa fa-cloud-upload'
                : 'fa fa-rocket'
            }
          />
        </div>
        <div>
          <h4 className={styles.topic}>
            {toDateString(schedule.date)}
            {': '}
            <span style={{ color: 'rgb(241, 139, 109)' }}>
              {schedule.topic}
            </span>
          </h4>
          <p style={{ textAlign: 'left', fontSize: 14, color: '#777' }}>
            {schedule.link ? (
              <a
                href={schedule.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'rgb(241, 139, 109)' }}
              >
                Resources
                <br />
              </a>
            ) : null}
            {schedule.description}{' '}
            <span style={{ color: 'rgb(241, 139, 109)' }}>
              {schedule.location}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
