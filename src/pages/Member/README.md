#### 更新項目

- 調整資料夾結構
- 整理 Member 路由
- 將 LeftCard
- 加上路徑判別機制以不刷新頁面的方式更新 Component
- 加上 /Member/style.css 統一排版

#### 建議事項

- 命名
  - 避免過長的命名
  - 元件用大駝峰方式取名
  - 統一元件命名
- 檔案管理
  - 元件集中引入
  - CSS 檔案以分頁為單位，非必要先不拆開
  - 避免嵌套多層資料夾
- 程式
  - `state` 控制按鈕顏色和選中頁簽的樣式
  - `state` 判斷點擊頁簽後顯示哪個元件

#### TODO

- 統一元件命名
- 整理 CSS 檔案集中管理
- 整理 Order 分頁的資料夾結構和元件引用路徑
