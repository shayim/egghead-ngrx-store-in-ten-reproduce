import { Component } from '@angular/core';

export class Person {
  name: string;
  attending: boolean;
  guests: number;
}

@Component({
  selector: 'my-app',
  template: `<h3>Party Planner</h3>
    <filter-select (updateFilter)="onFilterUpdate($event)"></filter-select>
    <person-input (addPerson)="onAddPerson($event)"></person-input>
    <person-list [people]="people" 
                 [filter]="filter"
                 (removePerson)="onRemovePerson($event)"
                 (toggleAttending)="onToggleAttending($event)"
                 (addGuest)="onAddGuest($event)"
                 (removeGuest)="onRemoveGuest($event)">
    <person-list>
  `,
})
export class AppComponent {
  people: Person[] = [
    { name: 'Howard', attending: true, guests: 0 }
  ];
  filter = "SHOW_ALL";

  onFilterUpdate(filter: string) {

    console.log(filter);
    this.filter = filter;
  }

  onAddPerson(personName: string) {
    this.people.push({
      name: personName,
      attending: true,
      guests: 0
    })
  }

  onRemovePerson(person: Person) {
    var index = this.people.indexOf(person)
    this.people.splice(index, 1);

    return false;
  }

  onAddGuest(person: Person) {
    var index = this.people.indexOf(person)
    this.people[index].guests += 1;

    return false;
  }

  onRemoveGuest(person: Person) {
    if (person.guests > 0) { person.guests -= 1; }

    return false;
  }

  onToggleAttending(person: Person) {
    person.attending = !person.attending;

    return false;
  }
}
