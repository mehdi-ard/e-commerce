import storage from './storage';
import services from 'services';

const defaultSettings = {
  maxPollQuestion: 16,
  maxPollOption: 36,
  maxCharacter: 1024,
  maxExpirationTime: 30
};

const defaultSettingVersion = 0;

export default async () => {
  let version = null;
  try {
    version = (await services.config.versions()).result.dataSettingVersion;
  } catch {
    version = defaultSettingVersion;
  }
  const currentSettingVersion = storage.get('settingVersion');
  if (
    !currentSettingVersion ||
    (currentSettingVersion && currentSettingVersion !== version)
  ) {
    storage.set('settingVersion', version);
    let setting = null;
    try {
      setting = (await services.config.setting()).result;
    } catch {
      setting = defaultSettings;
    } finally {
      storage.set('setting', setting);
    }
  }
};
