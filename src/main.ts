import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("auth");

  // app.use(json({ limit: "50mb" }));

  const port = process.env.PORT || 3000;
  await app.listen(port);

  Logger.log(
    `v-${process.env.npm_package_version} listen at http://localhost:${port}`,
  );
}

bootstrap();
