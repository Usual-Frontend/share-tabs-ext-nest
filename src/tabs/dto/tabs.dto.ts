import { IsOptional, IsString, IsUrl } from 'class-validator';

export class RecommendMeDto {
  @IsUrl()
  @IsOptional()
  url?: string;

  @IsString()
  @IsOptional()
  title: string;
}
