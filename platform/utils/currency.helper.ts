import Decimal from 'decimal.js';
import { ValueTransformer } from 'typeorm';
import { registerDecorator, ValidationArguments, ValidationOptions } from 'class-validator';

export class DecimalTransformer implements ValueTransformer {
	/**
	 * Used to marshal Decimal when writing to the database.
	 */
	to(decimal?: Decimal): string | undefined {
		return decimal?.toString();
	}

	/**
	 * Used to unmarshal Decimal when reading from the database.
	 */
	from(decimal?: string): Decimal | null {
		return decimal ? new Decimal(decimal) : null;
	}
}

export function IsDecimalValue(validationOptions?: ValidationOptions): PropertyDecorator {
	return function (object: Object, propertyName: string | symbol) {
		registerDecorator({
			name: 'isDecimalValue',
			target: object.constructor,
			propertyName: propertyName.toString(),
			constraints: [],
			options: validationOptions,
			validator: {
				validate(value: any, args: ValidationArguments) {
					if (value) {
						const regex = /^[+-]?[0-9]{1,9}(?:\.[0-9]{1,2})?$/;
						return regex.test(value.toString());
					} else {
						return true;
					}
				}
			}
		});
	};
}
