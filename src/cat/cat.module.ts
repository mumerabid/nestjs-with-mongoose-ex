import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from 'src/Models/cat.model';
import { CatController } from './controllers/cat/cat.controller';
import { CatService } from './services/cat/cat.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  controllers: [CatController],
  providers: [CatService],
})
export class CatModule {}
