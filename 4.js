//ЭКСПОРТ ИМПОРТ
//type="module" - прописать в <body>...</body>, Index.html
//src="4.js"></script>

import sub from "./sub.js";
import {i, pi, mul, Course} from "./sub.js";

console.log(sub(100,10)); //90
console.log(i); //0
console.log(pi); //13.1415
console.log(mul(2,3)); //6
console.log(new Course()); //Course {}

