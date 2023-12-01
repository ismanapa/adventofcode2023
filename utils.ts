import fs from "fs";

const readFile = (fileName: string): string => fs.readFileSync(fileName, 'utf-8');
const readFileLines = (fileName: string): string[] => readFile(fileName).split(/\r?\n/);

export {
    readFile,
    readFileLines
}