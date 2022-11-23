import nerdamer from 'nerdamer-ts';

export function productOfTwoPolynomials(str1: string, str2: string): string {
  const result = nerdamer(`expand((${str1})(${str2}))`)
    .toString()
    .split('')
    .filter((s) => s !== '*')
    .join('');
  return result;
}
