import { calculate } from "./calculate.js";
import toClipboard from "./toClipboard.js";
import themes from "./themes.js";
import keyDown from "./keyDown.js";
import clear from "./clear.js";
import charKey from "./charKey.js";

const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.querySelector('input');
const resultInput = document.getElementById('result');
const allowKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

document.querySelectorAll('.charKey').forEach(charKey);

document.getElementById('clear').addEventListener("click", clear);

input.addEventListener("keydown", keyDown);

document.getElementById('equal').addEventListener('click', calculate);


document.getElementById('copyToClipboard').addEventListener('click', toClipboard)

document.getElementById('themeSwitcher').addEventListener('click',themes)
