import { LOAD_VENUE_TIPS } from './actionTypes';

export const loadVenueTips = location => (
  {
    type: LOAD_VENUE_TIPS,
    payload: location,
  }
);
