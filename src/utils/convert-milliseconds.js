import moment from 'jalali-moment';

export const millisecondsToMinutesSeconds = ms => {
  let duration = moment.duration(ms, 'milliseconds');
  let fromMinutes = Math.floor(duration.asMinutes());

  if (fromMinutes < 1) {
    return 'کمتر از یک ';
  } else {
    return fromMinutes;
  }
};
