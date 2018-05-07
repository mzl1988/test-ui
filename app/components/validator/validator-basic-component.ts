import { ValidationError, validate } from 'class-validator';
import { ValidatorBasicModel } from "./validator-basic-model";


export abstract class ValidatorBasicComponent<T extends ValidatorBasicModel> {

	model: T;

	listErrors: Array<ValidationError> = [];

	constructor(arg: T) {
		this.model = arg;
	}

	validate() {
		try {
			validate(this.model).then(errors => {
				if (errors.length > 0) {
					this.listErrors = errors;
					this.verificationFailed();
				} else {
					this.listErrors = [];
					this.afterValidate();
				}
			});
		} catch (e) {
			console.log(e);
		}
	}

	verificationFailed() {

	}

	afterValidate() {

	}
}