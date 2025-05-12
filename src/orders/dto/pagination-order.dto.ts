import { IsEnum, IsOptional } from "class-validator";
import { OrderStatus } from "generated/prisma";
import { OrderStatusList } from "../enum/order.enum";
import { PaginationDto } from "src/common";

export class PaginationOrderDto extends PaginationDto{
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Valid status are ${ OrderStatusList }`
  })
  status?: OrderStatus;
}