# Attendance Management System

使用Node.js+Express建構考勤管理系統，並運用Vue框架來完成畫面渲染，同時運用MYSQL與Sequelize來完成資料庫控管。
使用者透過註冊帳號密碼來登入系統平台，同時可藉由按鈕、QR-Code掃描、GPS驗證來進行上下班打卡功能，以及瀏覽打卡記錄。
管理者經由後台提供的QR-Code顯示介面，來提供員工打卡，亦可查看員工出缺勤的狀況。

# ERD Design
<img width="581" alt="Screenshot 2023-01-09 at 6 37 20 PM" src="https://user-images.githubusercontent.com/96935173/211289238-44249b8b-af3c-4c27-a14c-6b673e06e4d5.png">

# Page Design
<img width="654" alt="Screenshot 2023-01-09 at 6 37 43 PM" src="https://user-images.githubusercontent.com/96935173/211289307-fc4175fa-d300-43bd-a9c8-b8ddfa819c67.png">

# 功能介紹
**註冊功能**
- 系統提供註冊登入功能 ---（完成）
- 使用者可以設定 name、email、password ---（完成）
- 註冊時，account、email不能與其他人重複，若有重複會跳錯誤提示 ---（完成）
- 錯誤提示文案：帳號密碼錯誤 ---（完成）
- 登入密碼錯誤 5 次上鎖 ---（開發中）

**種子資料**
- 使用者直接從資料庫初始化 ---（完成）
- 至少提供 1 個管理者與 5 個一般使用者 ---（完成）

| Name   | Email             | password  |
| ------ | ----------------- | --------- |
| admin  | admin@example.com | titaner   |
| user1  | user1@example.com | 12345678  |
| user2  | user2@example.com | 12345678  |
| user3  | user3@example.com | 12345678  |
| user4  | user4@example.com | 12345678  |
| user5  | user5@example.com | 12345678  |

**互動功能**
- 使用者要有修改密碼的功能  ---（開發中）
- 使用者能編輯自己的名稱、自我介紹、個人頭像與封面  ---（開發中）

**考勤功能**
- 一般使用者有按鈕可以打卡  ---（開發中）
- 出缺勤僅計算工作日(根據台灣行事曆)  ---（開發中）
- 上下班打卡機制(考勤管理)  ---（開發中）
- 早上上班打卡一次，晚上下班打卡一次，未滿 8 小時為缺勤  ---（開發中）
- 第一次打卡是當成上班食安  ---（開發中）
- 當天第二次打卡當成下班時間，若多次打卡，最後一次打卡當成下班時間  ---（開發中）
- 當天若只打卡一次，一樣視作出勤異常  ---（開發中）
- 換日時間為上午五點 (GMT+8)  ---（開發中）
- QR code 也可以打卡 - 意思是 QR code 會隨著每個人、每天變化，可以掃碼直接打卡  ---（開發中）
- GPS 驗證打卡 (只能在公司使用) - 如果 GPS 驗證，登入跟 QR code 都必須要在指定的公司地點附近 400 公尺內  ---（開發中）

**後台功能**
- 管理者帳號不可登入前台  ---（完成）
- admin 要有後台可以看 (admin 帳號固定 admin / tiadmin) ---（完成）
- HR 要是 admin 有不同功能，列出缺勤使用者的帳號  ---（開發中）
- admin 可以清除缺勤狀態，改為出勤  ---（開發中）
- 有通知功能給 admin 有人帳號上鎖  ---（開發中）
- 有通知功能給 admin 今天未打卡的人有誰 (optional)  ---（開發中）

# 專案安裝
1. 下載專案
```
$ git clone https://github.com/AllenliIE/attendance-management-platform.git
```

2. MySQL Workbench
```
CREATE DATABASE attendance_management_platform_workspace CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

3. project file
```
$ cd backend
$ npm install
$ npm nodemon
$ npx sequelize db:migrate:undo:all && npx sequelize db:migrate
$ npx sequelize db:seed:undo:all && npx sequelize db:seed:all
$ npm run dev

//Attendance Management System listening on port: 3000!
```
