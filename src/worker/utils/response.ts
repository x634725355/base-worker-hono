import { Context } from "hono";

export const createResponse = <T>(code: number, message: string, data?: T) => {
  return {
    code,
    message,
    data
  };
};

// 错误处理 
export function handleError(c: Context, error: Error, message: string) {
  console.error(`${message}: ${error.message}`);
  return c.json({
    code: 500,
    error: message,
    details: error.message
  }, 500);
}
