module.exports = convertToCamelCase = (data) => {
  Object.keys(data).forEach(key => {
    let value = data[key];

    if (typeof data[key] === 'object') value = convertToCamelCase(value);

    const camelKey = key.split('_').map((e, i) => {
      if (i === 0) return e;
      return e[0].toUpperCase() + e.slice(1);
    }).join('');

    if (camelKey !== key) {
      data[camelKey] = value;
      data[key] = undefined;
    }
  });

  return data;
}
