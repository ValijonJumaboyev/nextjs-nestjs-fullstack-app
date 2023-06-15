import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://walledev91:rB4IEoUF2gDRfaaq@cluster0.fhaft2l.mongodb.net/?retryWrites=true&w=majority"), BlogModule],
  controllers: [AppController],
  providers: [AppService],
  exports: []
})
export class AppModule { }

// uname - walledev91
// password - rB4IEoUF2gDRfaaq