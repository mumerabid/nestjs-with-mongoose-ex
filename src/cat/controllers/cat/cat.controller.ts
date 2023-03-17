import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CatService } from '../../services/cat/cat.service';
import { CatDTo } from '../../dtos/cat.dto';

@Controller('cat')
export class CatController {
  constructor(private catService: CatService) {}
  @Get()
  async getCat() {
    return this.catService.getCat();
  }
  @Post()
  @UsePipes(new ValidationPipe())
  createCat(@Body() catDto: CatDTo) {
    return this.catService.createCat(catDto);
  }
}
