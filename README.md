# chapter_numbering

***
## 概要

**Googleドキュメントメニューの「表示形式」＞「段落スタイル」にある見出し1〜6に対応しています。**

- 見出し1の後に見出し2、見出し3と使用することで、子階層が作成されます。<br>
- 見出し1の後に見出し1（同じ見出し番号）を使用することで、同階層でインクリメントされます。  
## Overview
**It corresponds to Heading 1 to Heading 6 styles in the "Format" > "Paragraph styles" menu of Google Docs.**

- By using Heading 2 and Heading 3 after Heading 1, you can create sub-levels or subheadings.
- Using Heading 1 again after Heading 1 (with the same heading number) will increment it within the same level.

***

## 使用例 Usage Examples

```
Heading1
Heading2
Heading3
Heading1
Heading2
Heading2
```
↓
```
1. Heading1
1.1. Heading2
1.1.1. Heading3
2. Heading1
2.1. Heading2
2.2. Heading2
```

***

## 注意事項
- 見出し1の後に見出し3を使うなど、数字の順番が飛ぶと0が挿入されてしまいます。
- ルーラーは使わないで下さい。
- 行頭は全角空白文字による字下げ1回は許容範囲です。文の途中での字下げは禁止です。
- 太文字、斜体、上付き、下付き、下線も可能な限り、避けて下さい。
- 引用文献は[1]のようなスタイルで記載下さい。
## Important Notes
- If you use Heading 3 after Heading 1, skipping the numbering sequence, a zero (0) will be inserted.
- Please avoid using the ruler.
- Indenting the first line with one full-width space is acceptable. However, indenting within a sentence is not allowed.
- Please avoid using bold, italics, superscript, subscript, and underline as much as possible.
- When citing references, please use the style [1].

***
## Install
chapter_numbering - Google Workspace Marketplace  
https://workspace.google.com/marketplace/app/chapter_numbering/1019494597248  
***
## License
chapter_numbering is licensed under the [MIT](#) license.  
Copyright &copy; 2023, NHO Nagoya Medical Center and NPO-OSCR
