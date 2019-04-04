import moment from 'moment';

const CLIENT_ID = 'WXNBJSRO1Z53BZC3NLB25OTW5X1IDP4Z3LJNXJXGTZU2Y5P0';
const CLIENT_SECRET = 'KG0NMNQHLZ0OD1LQUFSE0FNN5KA0FAVAT4P0VBNOZQ2QL4EA';
const v = `${moment().format('YYYYMMDD')}`;
export const KEY_API = `client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=${v}`;
export const BASE_URL = 'https://api.foursquare.com/v2/';

export function getApiPath(url) {
  return (`${url}&${KEY_API}`);
}
