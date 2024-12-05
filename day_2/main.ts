import { convertToNestedArray } from "./functions/convertToNestedArray";
import { isSafeRunner } from "./functions/isSafeRunner";
import { isSafe } from "./functions/isSave";

const fs = require("fs");

const inputPath = "./input.txt";
const input: string = fs.readFileSync(inputPath, "utf-8");
const nestedArray = convertToNestedArray(input);

console.log("part 1: ", nestedArray.filter(isSafe).length);

console.log("part 2: ", isSafeRunner(nestedArray));
