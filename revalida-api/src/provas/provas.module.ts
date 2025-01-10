import { Module } from '@nestjs/common';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { ProvaController } from './provas.controller';
import { ProvaRepository } from './provas.repository';

@Module({
  imports: [UsuarioModule],
  controllers: [ProvaController],
  providers: [ProvaRepository],
})
export class ProvaModule {}
