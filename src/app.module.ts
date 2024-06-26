import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { CallbackModule } from "./callback/module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot(), CallbackModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
