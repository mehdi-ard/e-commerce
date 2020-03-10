import moment from 'jalali-moment';

export const getBeautifyDate = published =>
  published
    ? moment(new Date(Number(published)))
      .locale('fa')
      .format('DD-MM-YYYY')
    : // .format('YYYY/MM/DD')
    '';
