
export const deepFreezeSkipDate = (o) => {
  Object.freeze(o);

  Object.getOwnPropertyNames(o).forEach((prop) => {
    const isDate: boolean = Object.prototype.toString.call(prop) === "[object Date]";

    if (!isDate) {
      Object.freeze(o);

      if (o.hasOwnProperty(prop)
        && o[prop] !== null
        && (typeof o[prop] === "object" || typeof o[prop] === "function")
        && !Object.isFrozen(o[prop])) {
          deepFreezeSkipDate(o[prop]);
      }
    }
  });

  return o;
};
