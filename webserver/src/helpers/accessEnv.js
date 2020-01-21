const cache = {};

const accessEnv = (key, toDefaultValue) => {
  if(!(key in process.env)) {
    if(toDefaultValue) return toDefaultValue;
    throw new Error(`${key} not found in process.env`);
  }

  if(cache[key]) return cache[key];

  cache[key] = process.env[key];
  return cache[key];
};

export default accessEnv;