import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'person-input',
	template: `
	<input type="text" #personName>
	<button (click)="add(personName)">Add Person</button>
	`
})
export class PersonInput {

	@Output() addPerson = new EventEmitter<string>();

	add(personName: HTMLInputElement) {
		this.addPerson.emit(personName.value);
		personName.value = '';
	}
}