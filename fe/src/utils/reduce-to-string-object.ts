export const reduceToStringObject = (obj = {}) => {
  const reducedObj = Object.entries(obj).reduce((acc, [key, value]) => {
    if (value) {
      acc[key] = String(value);
    }

    return acc;
  }, {} as Record<string, string>);

  return reducedObj;
};
