// lib/pm.js — 午後モード（記述式・自己採点）
import inquirer from 'inquirer';
import chalk from 'chalk';
import { loadPmQuestions, pickRandom } from './questions.js';
import {
  printSectionHeader,
  printLabelValue,
  printIndented,
  printDivider,
  sleep,
  ICON_CORRECT,
  ICON_WRONG,
} from './ui.js';

/** 分野に応じた色 */
function fieldBadge(field) {
  const colors = {
    '情報セキュリティ': chalk.bgRed.bold.white,
    'プロジェクトマネジメント': chalk.bgYellow.bold.black,
    'システム開発': chalk.bgBlue.bold.white,
    'データベース': chalk.bgGreen.bold.white,
    'ネットワーク': chalk.bgCyan.bold.black,
  };
  const colorFn = colors[field] ?? chalk.bgGray.bold.white;
  return colorFn(` ${field} `);
}

export async function runPmMode() {
  const questions = loadPmQuestions();
  const q = pickRandom(questions);

  // ─── 問題表示 ───────────────────────────────────────────
  printSectionHeader('🌙  午後モード — 記述式問題', 'magenta');

  console.log(`  出題分野：
