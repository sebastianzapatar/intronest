import { IsString, MinLength, IsInt } from 'class-validator';
export class CreatePornDto {
    @IsString()
    @MinLength(3)
    genre:string;

    @IsInt()
    duration:number;
    
    @IsInt()
    year:number;
}
