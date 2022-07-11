// @ts-check 
// TS파일한테 JS파일을 확인하라고 알려주는 거(?)
// JavaScript 파일에서 오류를 활성화하려면 // @ts-check를 .js 파일의 첫 번째 줄에 추가하여 TypeScript가 오류를 발생시키도록 합니다. TypeScript는 여러 오류를 제공할 수 있습니다.
// 이러한 오류를 무시하고 싶다면 // @ts-ignore 또는 // @ts-expect-error를 추가하여 특정 줄의 오류를 무시할 수 있습니다.
// https://www.typescriptlang.org/docs/handbook/intro-to-js-ts.html#ts-check

// "allowJs": true와 함께 사용
/**
 * Initialize the project
 * @param {object} config 
 * @param {boolean} config.debug
 * @param {string} config.url
 * @returns {boolean}
 */
export function init(config) {
  return true;
}

/**
 * Exit the program
 * @param {number} code
 * @returns {number}
 */
export function exit(code) {
  return code + 1;
}