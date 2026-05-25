// lib/ui.js — 表示ユーティリティ
import chalk from 'chalk';

/** メインバナー */
export function printBanner() {
  console.clear();
  console.log();
  console.log(
    chalk.bgBlue.bold.white('                                              ')
  );
  console.log(
    chalk.bgBlue.bold.white('    📘  応用情報技術者試験 対策 CLI アプリ    ')
  );
  console.log(
    chalk.bgBlue.bold.white('                                              ')
  );
  console.log();
}

/** 区切り線 */
export function printDivider(char = '─', length = 54) {
  console.log(chalk.gray(char.repeat(length)));
}

/** セクションヘッダ（太字・色付き） */
export function printSectionHeader(label, color = 'cyan') {
  console.log();
  const fn = chalk[color]?.bold ?? chalk.cyan.bold;
  console.log(fn(`▌ ${label}`));
  printDivider();
}

/** ラベル＋値を整形して出力 */
export function printLabelValue(label, value, labelColor = 'gray') {
  const colorFn = chalk[labelColor] ?? chalk.gray;
  console.log(`  ${colorFn(label + ':')}  ${value}`);
}

/** 複数行テキストを2スペースインデントで出力 */
export function printIndented(text) {
  const lines = String(text).split('\n');
  for (const line of lines) {
    console.log(`  ${line}`);
  }
}

/** ミリ秒待機 */
export function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** 正解アイコン */
export const ICON_CORRECT = chalk.green.bold('✔ 正解！');
/** 不正解アイコン */
export const ICON_WRONG = chalk.red.bold('✘ 不正解');
