/**
 * Throttles a function call. It returns a new function throttling
 * the original one.
 * Throttling enforces a maximum number of times a function can be
 * called over time. For example, "execute this function at most
 * once every 100 milliseconds.".
 */
function throttle(func, threshold: number = 250): any {
  let timeout;
  return function() {
    const callLater = () => {
      func.apply(this, arguments);
      timeout = null;
    };
    if (!timeout) {
      timeout = setTimeout(callLater, threshold);
    }
  };
}

export { throttle }
