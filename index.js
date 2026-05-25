// index.js — 応用情報技術者試験 対策CLIアプリ（メインエントリ）
import inquirer from 'inquirer';
import chalk from 'chalk';
import { runAmMode } from './lib/am.js';
import { runPmMode } from './lib/pm.js';
import { printBanner, printDivider, sleep } from './lib/ui.js';

async function mainMenu() {
  printBanner();
  await sleep(300);

  const { mode } = await inquirer.prompt([
    {
      type: 'list',
      name: 'mode',
      message: chalk.bold.cyan('どちらのモードで学習しますか？'),
      choices: [
        {
          name: `${chalk.yellow('☀  午前モード')}  ${chalk.gray('— 4択問題・即時正誤判定')}`,
          value: 'am',
        },
        {
          name: `${chalk.magenta('🌙  午後モード')}  ${chalk.gray('— 記述式・自己採点')}`,
          value: 'pm',
        },
        new inquirer.Separator(),
        {
          name: chalk.gray('✕  終了する'),
          value: 'exit',
        },
      ],
    },
  ]);

  if (mode === 'exit') {
    printDivider();
    console.log(chalk.gray('\n  またいつでも挑戦してください。お疲れさまでした！\n'));
    process.exit(0);
  }

  printDivider();

  if (mode === 'am') {
    await runAmMode();
  } else {
    await runPmMode();
  }

  // 1問終了後に続けるか確認
  printDivider();
  const { continueStudy } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'continueStudy',
      message: chalk.bold('続けて学習しますか？'),
      default: true,
    },
  ]);

  if (continueStudy) {
    console.log();
    await mainMenu();
  } else {
    printDivider();
    console.log(chalk.gray('\n  お疲れさまでした！合格を目指して頑張ってください！\n'));
  }
}

mainMenu().catch((err) => {
  // Ctrl+C などの中断を静かに終了
  if (err?.message?.includes('User force closed') || err?.name === 'ExitPromptError') {
    console.log(chalk.gray('\n\n  中断しました。またいつでも挑戦してください！\n'));
    process.exit(0);
  }
  console.error(chalk.red('エラーが発生しました:'), err);
  process.exit(1);
});
