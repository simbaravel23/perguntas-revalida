import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProvaModule } from './provas/provas.module';
import { UsuarioModule } from './usuario/usuario.module';
import { ConfigModule } from '@nestjs/config';
import { MysqlConfigService } from './config/config.service'; // Importa o serviço de configuração do MySQL

@Module({
  imports: [
        ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: MysqlConfigService, // Usa o serviço de configuração do MySQL
      inject: [MysqlConfigService],
    }),
  ],
})
export class AppModule {}