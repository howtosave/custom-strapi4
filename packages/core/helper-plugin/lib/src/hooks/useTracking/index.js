import { /* useContext, */ useRef } from 'react';
// [PTK] useless code
/* import axios from 'axios';
import TrackingContext from '../../contexts/TrackingContext'; */

const useTracking = () => {
  const trackRef = useRef();
  // [PTK] useless code
  trackRef.current = () => {};
  /* const uuid = useContext(TrackingContext);

  trackRef.current = (event, properties) => {
    if (uuid) {
      try {
        axios.post('https://analytics.strapi.io/track', {
          event,
          properties: { ...properties, projectType: strapi.projectType },
          uuid,
        });
      } catch (err) {
        // Silent
      }
    }
  }; */

  return { trackUsage: trackRef.current };
};
export default useTracking;
