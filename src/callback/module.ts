import { Module } from "@nestjs/common";
import { CallbackController } from "./controller";

@Module({
  controllers: [CallbackController],
  providers: [],
  exports: [],
})
export class CallbackModule {}
