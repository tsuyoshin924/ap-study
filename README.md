# 📘 応用情報技術者試験 対策アプリ

応用情報技術者試験（AP）の午前問題に対応したWeb対策アプリです。  
インストール不要、ブラウザだけで動作します。

## 🌐 デモ

<https://tsuyoshin924.github.io/ap-study/>

## ✨ 機能

|モード    |内容                     |
|-------|-----------------------|
|☀️ 午前モード|4択問題をランダム出題・即時正誤判定・解説表示|
|🌙 午後モード|近日公開予定                 |

## 🗂 ファイル構成

```
ap-study/
├── index.html          # Webアプリ本体
├── README.md
└── data/               # 問題データ（年度別JSON）
    ├── r07a_am.json    # R07秋期 午前（80問）
    └── r07s_am.json    # R07春期 午前（80問）
```

## 📅 収録データ

|ファイル        |年度      |問題数|ID範囲   |
|------------|--------|---|-------|
|r07a_am.json|令和7年度 秋期|80問|101〜180|
|r07s_am.json|令和7年度 春期|80問|401〜480|

## 🔧 年度データの追加方法

### 1. JSONファイルを作成

`data/` フォルダに以下の形式で追加：

```json
{
  "exam": "AP",
  "year": 2024,
  "season": "autumn",
  "period": "am",
  "questions": [
    {
      "id": 301,
      "category": "テクノロジ系",
      "field": "基礎理論",
      "question": "問題文",
      "options": ["ア: ...", "イ: ...", "ウ: ...", "エ: ..."],
      "answer": "ア",
      "explanation": "解説文"
    }
  ]
}
```

### 2. index.html の EXAMS 配列に1行追加

```javascript
const EXAMS = [
  { id: 'r07a', label: 'R07秋期', file: 'data/r07a_am.json' },
  { id: 'r07s', label: 'R07春期', file: 'data/r07s_am.json' },
  { id: 'r06a', label: 'R06秋期', file: 'data/r06a_am.json' }, // ← 追加
];
```

## 📋 ID採番ルール

|年度  |ID範囲   |
|----|-------|
|R07秋|101〜180|
|R06秋|301〜380|
|R07春|401〜480|
|R06春|501〜580|
|以降  |+80ずつ  |

## 🚀 ローカルで動かす

JSONをfetchで読み込むため、ローカルではWebサーバが必要です。

```bash
# Python 3
python -m http.server 8000
# → http://localhost:8000 でアクセス
```

## 📄 ライセンス

MIT