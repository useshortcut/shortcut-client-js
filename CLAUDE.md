# 開発作業ルール

## コミットガイドライン

### コンベンショナルコミット
- コミット粒度：意味的にまとまりのある単位でコミット
- フォーマット：[Conventional Commits](https://www.conventionalcommits.org/ja/v1.0.0/)に従う
- 例：
  - `feat: Epic一覧取得APIの実装`
  - `refactor: APIクライアントの構造改善`
  - `test: Epic取得のテストケース追加`

### コミット分離原則
- リファクタリングと機能追加は別コミット
- テストコードの追加/修正も適切に分離
- 一つのコミットで一つの責任

### コミットメッセージ
- Co-authorやGenerated with Claude Code等の情報は不要
- シンプルで明確なメッセージを心がける

## テスト戦略

### TDD（Test-Driven Development）
- t-wada、Kent Beckの手法に従う
- Red → Green → Refactorサイクル
- テストコードを常に維持管理

### テストの種類
- 単体テスト：個別機能の動作確認
- 統合テスト：API呼び出しの実際の動作確認
- エラーケースのテスト

## 開発フロー

1. **Red**: 失敗するテストを書く
2. **Green**: テストを通す最小限の実装
3. **Refactor**: コードを改善（テストは通したまま）
4. **Commit**: 意味的な単位でコミット

## ツール・コマンド

### テスト実行
```bash
yarn test
```

### リント・フォーマット
```bash
yarn lint
yarn format
```

### ビルド
```bash
yarn build
```