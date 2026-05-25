// lib/am.js — 午前モード（4択問題）
import inquirer from 'inquirer';
import chalk from 'chalk';
import { loadAmQuestions, pickRandom } from './questions.js';
import {
  printSectionHeader,
  printLabelValue,
  printIndented,
  printDivider,
  sleep,
  ICON_CORRECT,
  ICON_WRONG,
} from './ui.js';

/** カテゴリに応じた色を返す */
function categoryColor(category) {
  if (category.includes('テクノロジ')) return chalk.blue.bold(category);
  if (category.includes('マネジメント')) return chalk.yellow.bold(category);
  if (category.includes('ストラテジ')) return chalk.green.bold(category);
  return chalk.white.bold(category);
}

/** 選択肢の先頭文字（ア/イ/ウ/エ）を抽出 */
function extractOptionKey(option) {
  return option.split(':')[0].trim(); // "ア", "イ", ...
}

export async function runAmMode() {
  const questions = loadAmQuestions();
  const q = pickRandom(questions);

  // ─── 問題表示 ───────────────────────────────────────────
  printSectionHeader('☀  午前モード — 4択問題', 'yellow');

  printLabelValue('分類', categoryColor(q.category));
  printLabelValue('分野', chalk.white(q.field));
  console.log();
  console.log(chalk.bold.white('【問題】'));
  printIndented(q.question);
  console.log();
  printDivider('・', 40);
  console.log();

  // ─── 選択肢（inquirerのlistで表示）───────────────────────
  const { userAnswer } = await inquirer.prompt([
    {
      type: 'list',
      name: 'userAnswer',
      message: chalk.bold.cyan('回答を選んでください：'),
      choices: q.options.map((opt) => ({
        name: opt,
        value: extractOptionKey(opt),
      })),
      pageSize: 4,
    },
  ]);

  // ─── 正誤判定 ────────────────────────────────────────────
  await sleep(200);
  printDivider();
  console.log();

  const isCorrect = userAnswer === q.answer;

  if (isCorrect) {
    console.log(`  ${ICON_CORRECT}`);
  } else {
    console.log(`  ${ICON_WRONG}`);
    console.log(
      `  ${chalk.gray('あなたの回答:')}  ${chalk.red.bold(userAnswer)}  ` +
        `${chalk.gray('→ 正解:')}  ${chalk.green.bold(q.answer)}`
    );
  }

  // ─── 解説表示 ────────────────────────────────────────────
  console.log();
  console.log(chalk.bold.cyan('【解説】'));
  printIndented(q.explanation);
  console.log();
}
