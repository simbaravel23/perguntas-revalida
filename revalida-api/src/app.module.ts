import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { MysqlConfigService } from './config/config.service';
import { ProvaModule } from './provas/provas.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env', // ou o caminho para o seu arquivo .env
    }),
    TypeOrmModule.forRootAsync({
      useClass: MysqlConfigService, // Usa o serviço de configuração do MySQL
      inject: [MysqlConfigService],
    }),
    ProvaModule,
    UsuarioModule,
  ],
})
export class AppModule {}