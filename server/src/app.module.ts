import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AuthModule } from './modules/auth/auth.module'
import { UsersModule } from './modules/users/users.module'
import { ProductsModule } from './modules/products/products.module'
import { CartModule } from './modules/cart/cart.module'
import { OrdersModule } from './modules/orders/orders.module'
import { PaymentModule } from './modules/payment/payment.module'
import { DashboardModule } from './modules/dashboard/dashboard.module'
import { ReviewsModule } from './modules/reviews/reviews.module'
import { NotificationsModule } from './modules/notifications/notifications.module'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'production',
    }),
    AuthModule,
    UsersModule,
    ProductsModule,
    CartModule,
    OrdersModule,
    PaymentModule,
    DashboardModule,
    ReviewsModule,
    NotificationsModule,
  ],
})
export class AppModule {}
