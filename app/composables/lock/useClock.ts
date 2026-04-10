export const useClock = () => {
  const now = useNow({interval: 1000});
  const formatted = useDateFormat(now, 'ddd MMM D YYYY HH:mm:ss');

  return {
    dateTimeNow: formatted,
  };
}
