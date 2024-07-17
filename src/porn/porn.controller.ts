import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PornService } from './porn.service';
import { CreatePornDto } from './dto/create-porn.dto';
import { UpdatePornDto } from './dto/update-porn.dto';

@Controller('porn')
export class PornController {
  constructor(private readonly pornService: PornService) {}

  @Post()
  create(@Body() createPornDto: CreatePornDto) {
    return this.pornService.create(createPornDto);
  }

  @Get()
  findAll() {
    return this.pornService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pornService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePornDto: UpdatePornDto) {
    return this.pornService.update(+id, updatePornDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pornService.remove(+id);
  }
}
