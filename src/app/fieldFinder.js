export class FieldFinder {
	constructor(fields) {
		this.fields = fields;

		this.findField = this.findField.bind(this);
	}

	findField(fieldName) {
		return (
			this.fields.find((field) => field.field_name === fieldName)
				?.field_value ?? ""
		);
	}
}
