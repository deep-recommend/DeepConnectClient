# comedian-matching-front

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.5.

## Done

-   akita のエラーは node_module を確認すること
-   $ ng add @datorama/akita
-   $ ng add @angular/material
-   $ npm i typescript eslint @typescript-eslint/eslint-plugin
-   $ npm install @datorama/akita-ng-entity-service
-   $ npm i -s @angular/flex-layout @angular/cdk
-   $ npm i lodash
-   $ npm i ts-custom-error
-   $ npm i perfect-scrollbar
-   $ npm i payjp
-   .prettierrc の設定

## TODO

-   $ git clone git@github.com:deep-recommend/angular-template.git
-   $ npm i
-   $ ng s
-   「authentication.service.ts」の token の書き換え
-   「index.html」の title タグの書き換え

## WIllDO

-   今はユーザーにいっぱいカラム付け足すしかない
-   特徴機能
-   changeDetection で無駄のない実装
-   rx-angular/state でコンポーネント内の値のリアクティブ化
-   ドメイン駆動設計による適切で簡易な API との HTTP 通信
-   サーバーサイドの DB のグローバル化

## ヘッダーの padding いじる場所

-   back-to-pre-page.component.scss

```scss
@media screen and (max-width: 700px) {
    .button {
        padding: 40px 8px 4px;
    }
}
```

-   title-header.component.scss

```scss
@media screen and (max-width: 700px) {
    .header {
        padding: 48px 24px 12px;
    }
}
```

-   layout.component.scss

```scss
@media screen and (max-width: 700px) {
    .contents {
        .header {
            &.visible {
                padding: 44px 0;
            }
        }
    }
}
```

-   message-room-header-p.component.scss

```scss
@media screen and (max-width: 700px) {
    .message-room-header {
        top: 84px;
    }
}
```

-   user-detail-p.component.scss

```scss
@media screen and (max-width: 700px) {
    .user-bg {
        margin-top: 64px;
        height: 448px;
    }
}
```

-   serach-form-p.component.scss

```scss
@media screen and (max-width: 700px) {
    .form {
        padding-top: 64px;
    }
}
```

-   my-page-setting-p.component.scss

```scss
@media screen and (max-width: 700px) {
    .form {
        padding: 64px 0;
    }
}
```

-   message-room-screen-p.component.scss

```scss
@media screen and (max-width: 700px) {
    .message-screen {
        padding-top: 144px;
    }
}
```
