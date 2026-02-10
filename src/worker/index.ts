import { Hono } from "hono"
import { cors } from "hono/cors"
import { logger } from "hono/logger"
import { test } from "./modules/test"
import { customLogger } from "./middleware/customLogger"

const app = new Hono<HonoProps>()

app.use(logger(customLogger))
app.use(
    "*",
    cors({
        origin: "*",
        allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
        allowHeaders: ["Content-Type", "Authorization", "x-token"],
        maxAge: 86400,
    }),
)
// 处理 OPTIONS 预检请求
app.options("*", (c) => {
    return c.json(null, 200, {
        "Access-Control-Allow-Origin": "*", // 允许跨域
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Authorization, x-token",
        "Access-Control-Max-Age": "86400", // 让浏览器缓存 CORS 结果 10 分钟
    })
})
app.notFound((c) => c.json({ message: "Not Found", ok: false }, 404))
app.onError((err, c) => {
    console.log("%c Line:30 🥑 err", "color:#93c0a4", err.stack, c.res)
    return c.json({ code: 500, message: "System abnormality" }, 500)
})

app.get("/api/", (c) => c.json({ name: "Cloudflare" }))

const routesHono: Hono<HonoProps>[] = [test]

routesHono.forEach((routeHono) => {
    app.route("/api", routeHono)
})

export default app
