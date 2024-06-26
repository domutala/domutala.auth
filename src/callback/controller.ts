import { Controller, Get, Query, Res } from "@nestjs/common";
import { Response } from "express";

@Controller("callback")
export class CallbackController {
  constructor() {}

  @Get("/github")
  async updatePin(
    @Query("code") code: string,
    @Query("state") state: string,
    @Res() res: Response,
  ) {
    // https://github.com/login/oauth/authorize?client_id=Iv23liH1peB1fRkwQ8T5&redirect_uri=http://localhost:49000/auth/callback/github&&state=https%3A%2F%2Fdomutala.com
    // https://github.com/login/oauth/authorize?client_id=Iv23liH1peB1fRkwQ8T5&state=https%3A%2F%2Fgoogle.com
    return res.redirect(state || "https://domutala.com");
  }
}
