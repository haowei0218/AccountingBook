# AccountingBook
這是一個用於記帳的APP 
### 資料夾結構
your-app/
├── public/
│   └── favicon.svg

├── src/
│   ├── main.tsx
│   ├── App.tsx
│   ├── routes/
│   │   ├── index.tsx          # 路由集中管理
│   │   └── routePaths.ts      # 路由常數
│   │
│   ├── layouts/
│   │   ├── AppLayout.tsx      # 有側欄/頂欄的框架
│   │   └── AuthLayout.tsx     # login/register 的框架
│   │
│   ├── features/              # ⭐核心：按功能模組分
│   │   ├── auth/
│   │   │   ├── api.ts
│   │   │   ├── types.ts
│   │   │   ├── hooks.ts
│   │   │   ├── pages/
│   │   │   │   ├── LoginPage.tsx
│   │   │   │   └── RegisterPage.tsx
│   │   │   └── components/
│   │   │       └── AuthForm.tsx
│   │   │
│   │   ├── transactions/
│   │   │   ├── api.ts
│   │   │   ├── types.ts
│   │   │   ├── hooks.ts
│   │   │   ├── pages/
│   │   │   │   ├── TransactionsPage.tsx  # 列表頁
│   │   │   │   └── TransactionEditPage.tsx
│   │   │   └── components/
│   │   │       ├── TransactionForm.tsx
│   │   │       ├── TransactionList.tsx
│   │   │       └── TransactionItem.tsx
│   │   │
│   │   ├── categories/
│   │   │   ├── api.ts
│   │   │   ├── types.ts
│   │   │   ├── hooks.ts
│   │   │   ├── pages/
│   │   │   │   └── CategoriesPage.tsx
│   │   │   └── components/
│   │   │       └── CategoryForm.tsx
│   │   │
│   │   └── dashboard/
│   │       ├── hooks.ts
│   │       └── components/
│   │           └── SummaryCards.tsx
│   │
│   ├── components/            # 全域共用「純UI」元件
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Select.tsx
│   │   ├── Modal.tsx
│   │   ├── Toast.tsx
│   │   └── Loading.tsx
│   │
│   ├── lib/                   # 基礎設施：外部服務/封裝
│   │   ├── supabaseClient.ts
│   │   ├── http.ts            # fetch/axios wrapper (可選)
│   │   └── queryClient.ts     # React Query 的話放這
│   │
│   ├── store/                 # 全域狀態（真的需要才放）
│   │   └── authStore.ts
│   │
│   ├── utils/                 # 純工具
│   │   ├── formatMoney.ts
│   │   ├── formatDate.ts
│   │   └── validators.ts
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   └── types/
│       └── index.ts           # 共用型別（可選）
│
├── .env.example               # 環境變數範例
├── package.json
└── README.md
