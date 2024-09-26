//用于创建BEM规范名字

const createBEM = (prefixName: string) => {
  const b = (blockSuffix?: string) => _bem(prefixName, blockSuffix);
  const e = (element?: string) => _bem(prefixName, "", element);
  const m = (modifier?: string) => _bem(prefixName, "", "", modifier);
  const be = (blockSuffix?: string, element?: string) =>
    _bem(prefixName, blockSuffix, element);
  const bm = (blockSuffix?: string, modifier?: string) =>
    _bem(prefixName, blockSuffix, "", modifier);
  const em = (element?: string, modifier?: string) =>
    _bem(prefixName, "", element, modifier);
  return {
    b,
    e,
    m,
    be,
    bm,
    em,
  };
};

const _bem = (
  prefixName: string,
  blockSuffix?: string,
  element?: string,
  modifier?: string
) => {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`;
  }
  if (element) {
    prefixName += `__${element}`;
  }
  if (modifier) {
    prefixName += `--${modifier}`;
  }
  return prefixName;
};
export const createName = (name: string) => {
  const prefixName = `zz-${name}`;
  return createBEM(prefixName);
};
