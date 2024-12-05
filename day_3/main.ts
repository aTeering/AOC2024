import { corruptedMemFunc } from "./functions/corruptedMemFunc";
import { corruptedMemFuncDoOrDont } from "./functions/corruptedMemFuncDoOrDont";

const fs = require("fs");

const inputPath = "./input.txt";
const input: string = fs.readFileSync(inputPath, "utf-8");
const rows = input.split("\n");

console.log("part 1:", corruptedMemFunc(rows));

console.log("part 2:", corruptedMemFuncDoOrDont(rows));
