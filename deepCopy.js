function deepCopy(obj) {
  var o;
  if (obj.constructor === Object) {
    o = {...obj};
    Object.keys(o).forEach(key => {
      if (typeof o[key] === 'object') {
        o[key] = deepCopy(o[key]);
      }
    });
  } else if (obj.constructor === Array) {
    o = [...obj];
    o.forEach((item, i) => {
      if (typeof item === 'object') {
        o[i] = deepCopy(item);
      }
    });
  }
  return o;
}
