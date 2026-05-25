# 📘 応用情報技術者試験 対策アプリ

応用情報技術者試験（AP）の午前・午後問題に対応したWeb対策アプリです。  
インストール不要、ブラウザだけで動作します。

## 🌐 デモ

> GitHub Pages でホストする場合:  
> `https://<your-username>.github.io/<repo-name>/`

## ✨ 機能

|モード    |内容                     |
|-------|-----------------------|
|☀️ 午前モード|4択問題をランダム出題・即時正誤判定・解説表示|
|🌙 午後モード|記述式設問を出題・模範解答・採点基準・自己採点|

## 🗂 ファイル構成（Web版）

```
ap-study/
├── index.html          # Webアプリ本体（単一ファイル）
├── README.md
│
│── （以下はCLI版）
├── index.js
├── package.json
├── questions_am.json
├── questions_pm.json
└── lib/
    ├── am.js
    ├── pm.js
    ├── questions.js
    └── ui.js
```

## 🚀 使い方（Web版）

`index.html` をブラウザで開くだけで動作します。

## 💻 CLI版の起動方法

```bash
npm install
node index.js
```

## 🔧 問題を追加するには

`index.html` 内の `AM_QUESTIONS` / `PM_QUESTIONS` 配列にオブジェクトを追記するだけです。

## 📄 ライセンス

MIT