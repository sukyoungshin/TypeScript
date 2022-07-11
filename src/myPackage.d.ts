// d.ts의 역할
// - TS에게 타입에 대해서 설명한다.
// - 패키지가 어떻게 생겼는지, 어떤 함수랑 다른 것들이 있는지를 설명해주는 파일
interface Config {
  url: string;
}
declare module "myPackage" {
  function init(config: Config): boolean;
  function exit(code: number): number;
}