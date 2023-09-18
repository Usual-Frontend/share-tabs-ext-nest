import { IsOptional, IsString, IsUrl, IsJSON } from 'class-validator';

export class RecommendMeDto {
  @IsUrl()
  @IsOptional()
  url?: string;

  @IsString()
  @IsOptional()
  title: string;
}

export class SaveTabGroupDto {
  @IsString()
  @IsOptional()
  tag: string;

  @IsJSON()
  tab_array_json: JSON;
}
