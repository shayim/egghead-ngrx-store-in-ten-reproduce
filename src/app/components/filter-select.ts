import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'filter-select',
	template:`
	<div class="margin-bottom-10">
		<select #selectList (change)="updateFilter.emit(selectList.value)">
			<option *ngFor="let filter of filters" [value]="filter.value">
				{{filter.text}}
			</option>
		</select>
	</div>
	`,
	styles: [`
	
.margin-bottom-10{
    margin-bottom: 10px;
}

	`]
})
export class FilterSelector {
	filters = [
		{ text: 'All', value: 'SHOW_ALL'},
		{ text: 'Attending', value: 'SHOW_ATTENDING'},
		{ text: 'Guest', value: 'SHOW_WITH_GUESTS'}
	]
	@Output() updateFilter = new EventEmitter<string>();
}