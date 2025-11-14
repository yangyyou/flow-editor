// 样式命名的 bem 规范
// block 代码块，element 元素， modifier装饰， state状态
// y-button
// y-button__element
// y-button__element--disabled
// is-checked is-enabled

// :class=[bem.b()]

function _bem(
  prefixName: string,
  blockSuffix: string,
  element: string,
  modifier: string,
) {
  if (blockSuffix) prefixName += `-${blockSuffix}`;
  if (element) prefixName += `__${element}`;
  if (modifier) prefixName += `--${modifier}`;
  return prefixName;
}

function createBEM(prefixName: string) {
  const b = (blockSuffix: string = '') => _bem(prefixName, blockSuffix, '', '');
  const e = (element: string = '') =>
    element ? _bem(prefixName, '', element, '') : '';
  const m = (modifier: string = '') =>
    modifier ? _bem(prefixName, '', '', modifier) : '';
  const be = (blockSuffix: string = '', element: string = '') =>
    blockSuffix && element ? _bem(prefixName, blockSuffix, element, '') : '';
  const bm = (blockSuffix: string = '', modifier: string = '') =>
    blockSuffix && modifier ? _bem(prefixName, blockSuffix, '', modifier) : '';
  const em = (element: string = '', modifier: string = '') =>
    modifier && element ? _bem(prefixName, '', element, modifier) : '';
  const bem = (
    blockSuffix: string,
    element: string = '',
    modifier: string = '',
  ) =>
    blockSuffix && modifier && element
      ? _bem(prefixName, blockSuffix, element, modifier)
      : '';

  const is = (name: string, state: unknown) => (state ? `is-${state}` : '');

  return {
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
  };
}

export function createNamespace(name: string) {
  const prefixName = `y-${name}`;
  return createBEM(prefixName);
}

const bem = createNamespace('icon');
console.log(bem.b('box'));
console.log(bem.e('element'));
console.log(bem.m('modifier'));
console.log(bem.bem('box', 'element', 'modifier'));
