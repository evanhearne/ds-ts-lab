import {friends, colleagues} from './01-basics';
import {Friend, Colleague} from './myTypes';

function findMatch<T>(data: T[], criteria: (d: T) => boolean): T | undefined {
  return data.find(criteria);
}

console.log(findMatch<Friend>(friends, f => f.name.startsWith('Jane')));
console.log(findMatch<Colleague>(colleagues.current, c => c.department === 'Finance'));

function sortArray<T>(data: T[], compare: (a: T, b: T) => number): T[] {
  return [...data].sort(compare);
}

console.log(sortArray<Friend>(friends, (a, b) => a.age - b.age));
console.log(sortArray<Colleague>(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));