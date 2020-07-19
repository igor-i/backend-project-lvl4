import Rollbar from 'rollbar'
import Koa from 'koa';
import dotenv from 'dotenv';

dotenv.config();

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_ACCESS_TOKEN,
  logLevel: "debug"
});

const app = new Koa();

app.use(async ctx => {
  try {
    rollbar.log('Hello World');
    ctx.body = 'Hello World';
  } catch (err) {
    rollbar.error(err, ctx.request);
  }
});

app.listen(80);
