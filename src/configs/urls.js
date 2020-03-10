import evn from './env';

const common = {};

const development = {
  endPointAdmin: 'http://192.168.1.7:8075/api/app/v1'
  // endPointAdmin: 'http://192.168.1.185:8075/api/app/v1' // mohsen
};

const production = {
  endPointAdmin: 'https://a.getname.ir/api/app/v1'
};

export default {
  ...common,
  ...evn(() => production, () => development)
};
