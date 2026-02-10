import { Hono } from "hono"
import { HTTPException } from "hono/http-exception"

export const test = new Hono<HonoProps>()

test.get("/test/123", (c) => {
    throw new HTTPException(401, { res: c.newResponse("1234") })
})
