# ボタンコンポーネントの実装
## 要件
- ボタンの状態は次の4種類がある
  - 非活性（disabled）
  - ローディング中（loading）
  - ホバー時（hover）
  - フォーカス時（focus）
- ボタンのラベルは外部から指定可能
- ボタンのクリック時に発火する関数（onClick）を外部から指定可能
- ボタンの色や形状は固定であり、外部からカスタマイズできない
- ボタンの高さ・横幅は親コンポーネントによって制御される
- ボタンのtypeをsubmitとして指定可能
- ボタンにURLを渡した場合、リンクとして振る舞う
  - リンク先（href）を指定可能
  - 開き方（target）を指定可能

## 環境構築
### 前提
- Node.js v22.0.0 を使用します。
- Volta を利用してNode.jsのバージョンを管理します。
  - Voltaのインストール方法は [公式サイト](https://volta.sh/) を参照してください

### 手順
1. リポジトリのクローン
```bash
git clone https://github.com/tamo-tmry/frontend-coding-task.git
```

2. Node.jsのバージョン適用
```bash
volta install node@22.0.0
```

3. 依存関係のインストール
```bash
npm ci
```

4. 開発サーバーの起動
```bash
npm run dev
```

5. ブラウザでの確認
http://localhost:3000 にアクセスしてください。

### テストの実行
本PJでは [Vitest](https://vitest.dev/) を利用しています。  

```bash
npm run test
```
