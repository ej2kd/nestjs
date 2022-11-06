import { Controller, Get } from "@nestjs/common";

@Controller('/app') // High level routing handling
export class AppController {
  @Get('/asdf')
  getRootRoute() {
    return 'hi there!';
  }

  @Get('/bye')
  getByeThere() {
    return 'bye there!'
  }
}