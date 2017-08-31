/**
 * Debounces a function call. It returns a new function debouncing
 * the original one.
 * Debouncing enforces a function not to be called again until a
 * certain amount of time has passed without it being called.
 * For example, "execute this function only if 100 milliseconds
 * have passed without it being called".
 */
function debounce(func, threshold: number): any {
  let timeout;
  return function() {
    const context = this;
    const args = arguments;
    const later = function() {
      timeout = null;
    };
    const callNow = !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, threshold);
    if (callNow) {
      return func.apply(context, args);
    }
  };
};

export { debounce }
