**1. Css**

兩種切版皆放在 src/css 資料夾下



**2. CheckBox**

實作可重複勾選之元件，
按住 Shift 勾選會連帶選取之前所有選項，
勾選 Select All 會選取 / 取消所有選項，
在 src/Select 之下包含所有組件，
useSelect.js 為處理所有操作邏輯之 hook，
styles.js 管理所有 styled components

**3. 常用CRUD**

遵照RESTFUL API設計可分為 GET(R) / POST(C) / PATCH(U) / DELETE(D)，
以會員為例，常見的註冊、取得資料、修改資料、刪除帳號，
可統一 API 網址為 ${route}/member/%{id}，
再以 GET/POST/PATCH/DELETE 觸發不同行為，
搭配傳入/接收 json data進行資料存取，
接收回應 http status code 判斷 API 呼叫結果。




