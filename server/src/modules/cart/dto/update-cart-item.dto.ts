import { PartialType } from '@nestjs/mapped-types'
import { CreateCart-itemDto } from './create-cart-item.dto'

export class UpdateCart-itemDto extends PartialType(CreateCart-itemDto) {}
