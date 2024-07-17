import { PartialType } from '@nestjs/mapped-types';
import { CreatePornDto } from './create-porn.dto';

export class UpdatePornDto extends PartialType(CreatePornDto) {}
