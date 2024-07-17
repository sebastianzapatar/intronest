import { Injectable } from '@nestjs/common';
import { CreatePornDto } from './dto/create-porn.dto';
import { UpdatePornDto } from './dto/update-porn.dto';

@Injectable()
export class PornService {
  create(createPornDto: CreatePornDto) {
    return 'This action adds a new porn';
  }

  findAll() {
    return `This action returns all porn`;
  }

  findOne(id: number) {
    return `This action returns a #${id} porn`;
  }

  update(id: number, updatePornDto: UpdatePornDto) {
    return `This action updates a #${id} porn`;
  }

  remove(id: number) {
    return `This action removes a #${id} porn`;
  }
}
