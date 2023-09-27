import { IsJSON, IsOptional, IsString } from 'class-validator';

export class CreateTabGroupDto {
  @IsString()
  @IsOptional()
  tag: string;

  @IsJSON()
  tab_array_json: string;
}
