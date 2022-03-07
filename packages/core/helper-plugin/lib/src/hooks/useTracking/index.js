// [PK] removed telemetry

const useTracking = () => {
  return { trackUsage: () => {} };
};
export default useTracking;
