// lib/questions.js — 問題データの読み込みとランダム選択
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

/** JSONファイルを読み込んで返す */
function loadJson(filename) {
  const filepath = join(ROOT, filename);
  const raw = readFileSync(filepath, 'utf-8');
  return JSON.parse(raw);
}

/** 午前問題を全件取得 */
export function loadAmQuestions() {
  return loadJson('questions_am.json');
}

/** 午後問題を全件取得 */
export function loadPmQuestions() {
  return loadJson('questions_pm.json');
}

/** 配列からランダムに1件選択 */
export function pickRandom(arr) {
  if (!arr || arr.length === 0) throw new Error('問題データが空です');
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}
