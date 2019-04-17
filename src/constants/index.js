import moment from 'moment';

const CLIENT_ID = 'QTOPKQVKI1TXSABCZUWXA3TARDVPZU4KAOIYIV1FXSY5MJFG';
const CLIENT_SECRET = 'SAL0EOH2XAZHE3Z3IKB4LVWWMTFVKUKTGWAFPJKM1NBCJCQJ';
const v = `${moment().format('YYYYMMDD')}`;
const KEY_API = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${v}`;
export const BASE_URL = 'https://api.foursquare.com/v2/';

export function getApiPath(url) {
  return `${url}&${KEY_API}`;
}
