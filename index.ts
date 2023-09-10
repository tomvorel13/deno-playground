import { Application, Router } from "https://deno.land/x/oak@v12.6.1/mod.ts";

const app = new Application();
const router = new Router();

router.get("/", (ctx) => {
  ctx.response.status = 200;
  ctx.response.body = "Hello world AGAIN!";
});

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 3000 });
