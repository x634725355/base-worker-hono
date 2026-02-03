// 全局类型声明文件
// 这些类型将在整个项目中自动可用，无需导入

type Bindings = {
    // oxlint-disable-next-line typescript/no-explicit-any
    hono: any
    USERNAME: string
    PASSWORD: string
    KV: KVNamespace
    DB: D1Database
    R2: R2Bucket
}

interface HonoProps {
    Bindings: Bindings,
    Variables: {
        appleService: AppleAppStoreService,
        appleInAppPurchase: AppleInAppPurchase,
        appleOrder: AppleOrder
    },
}

