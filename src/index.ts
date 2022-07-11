// d.ts에서 정의된 타입을 불러오고, 함수를 구현한다.
import { init, exit } from "myPackage";

init({
  url: "true"
});
exit(1);

// ctrl을 누르고 localStorage를 클릭하면, lib.dom.d.ts로 이동한다. 
// d.ts 파일에서는 타입 정의를 확인할 수 있고, TS가 해당 파일을 읽는다.
localStorage; 