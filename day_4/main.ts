import { wordSearch } from "./functions/wordSearch";
import { wordSearchCross } from "./functions/wordSearchCross";

const fs = require("fs");

const inputPath = "./input.txt";
const input: string = fs.readFileSync(inputPath, "utf-8");

const rows: string[] = input.split("\n");
const splitRowsIntoLetters = rows.map((row) => row.split(""));

console.log("part1:", wordSearch(splitRowsIntoLetters, "XMAS"));

console.log("part2:", wordSearchCross(splitRowsIntoLetters, "MAS", "A"));
