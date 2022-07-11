// d.ts의 역할
// - TS에게 타입에 대해서 설명한다.
// - 패키지가 어떻게 생겼는지, 어떤 함수랑 다른 것들이 있는지를 설명해주는 파일
interface Config {
  url: string;
}

export declare function init(config: Config): boolean;
export declare function exit(code: number): number;

// declare module "myPackage" {
//   export function init(config: Config): boolean;
//   export function exit(code: number): number;
// }