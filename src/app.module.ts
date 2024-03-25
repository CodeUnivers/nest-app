import { Module } from '@nestjs/common';
import { AuthModule } from './Auth/auth.module';
import { ProductModule } from './Product/product.module';
import { UserModule } from './User/user.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevtoolsModule } from '@nestjs/devtools-integration';

@Module({
  imports: [
    ProductModule,
    AuthModule,
    UserModule,
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // code here..
}
