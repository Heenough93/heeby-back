import {
  registerDecorator,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidatorOptions,
} from 'class-validator';
import { Not } from 'typeorm';

import { AppDataSource } from '../../data-source';


@ValidatorConstraint({ async: true })
export class IsUniqueConstraint implements ValidatorConstraintInterface {
  public defaultMessage(): string {
    return '$property is already in use.';
  }

  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    const [ entity, field ] = args.constraints;
    const dto = args.object as any;

    const repository = AppDataSource.getRepository(entity);
    const isUpdate: boolean = dto['id'] !== undefined;
    let count = 0;

    if (!isUpdate) {
      count = await repository.count({ where: { [field]: value } });
    } else {
      count = await repository.count({ where: { [field]: value, id: Not(dto['id']) } });
    }

    return count <= 0;
  }
}

export function IsUnique(entity: any, field: string, validationOptions?: ValidatorOptions) {
  return function (object: object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [ entity, field ],
      validator: IsUniqueConstraint,
    });
  };
}
