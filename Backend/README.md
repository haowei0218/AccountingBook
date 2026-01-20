### 資料夾架構
backend/
├── src/
│   ├── server.ts                 # 程式入口：啟動 HTTP server
│   ├── app.ts                    # 組裝 express app：middleware + routes
│   │
│   ├── config/
│   │   ├── env.ts                # 讀取/驗證 env（缺一個就直接報錯）
│   │   └── cors.ts               # CORS 設定（可選）
│   │
│   ├── db/
│   │   ├── client.ts             # DB client（pg / prisma / supabase admin）
│   │   └── migrations/           # SQL migrations（或 prisma schema）
│   │
│   ├── routes/                   # 路由：只管 path -> controller
│   │   ├── index.ts
│   │   ├── auth.routes.ts
│   │   ├── transactions.routes.ts
│   │   └── categories.routes.ts
│   │
│   ├── controllers/              # controller：req/res + status code（薄）
│   │   ├── auth.controller.ts
│   │   ├── transactions.controller.ts
│   │   └── categories.controller.ts
│   │
│   ├── services/                 # ⭐商業邏輯（厚）：登入、權限、流程
│   │   ├── auth.service.ts
│   │   ├── transactions.service.ts
│   │   └── categories.service.ts
│   │
│   ├── repositories/             # 資料存取層：只做 DB CRUD（不塞邏輯）
│   │   ├── user.repo.ts
│   │   ├── transactions.repo.ts
│   │   └── categories.repo.ts
│   │
│   ├── middlewares/
│   │   ├── auth.middleware.ts    # 驗證 JWT / session
│   │   ├── validate.middleware.ts# 驗證 request body（可用 zod）
│   │   └── error.middleware.ts   # 統一錯誤處理（回傳格式一致）
│   │
│   ├── utils/
│   │   ├── hash.ts               # bcrypt：hash/compare
│   │   ├── jwt.ts                # sign/verify
│   │   └── response.ts           # 回傳格式 helper（可選）
│   │
│   └── types/
│       └── index.ts
│
├── .env.example
├── package.json
├── tsconfig.json
└── README.md
