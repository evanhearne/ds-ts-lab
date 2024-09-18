import {Friend, Colleague, EmailContact } from './myTypes'
import {friends, colleagues} from './01-basics'; // this line was not included in the practical. 

function older(f: Friend) : String {
    f.age += 1
    return `${f.name} is now ${f.age}`
}

console.log(older(friends[0]))

function allOlder(f: Friend[]) : String[] {
    var s: String[] = []
    for (let i = 0; i < f.length; i++) {
        var t = `${f[i].name} is now ${f[i].age + 1}`
        s.push(t)
    }
    return s
}

console.log(allOlder(friends))

// Find the colleague with the highest extension number.
function highestExtension(cs: Colleague[]) { // inferred return type
    const result = cs.sort(
      (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
  }
  console.log(highestExtension(colleagues.current));
  
function addColleague(a: Colleague[], b: string, c: string, d: string): Colleague {
    const highColleague = highestExtension(a)
    const ext = highColleague.contact.extension
    const colleague: Colleague = { name: b, department: c, contact: { email: d, extension: ext + 1 } }
    a.push(colleague)
    return colleague
}

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

function sortColleagues(colleagues: Colleague[], sorter: (c1: Colleague, c2: Colleague) => number): EmailContact[] {
    const sorted = colleagues.sort(sorter); // Colleague[] is inferred
    const result : EmailContact[] = sorted.map((c) => ({ name: c.name, email: c.contact.email }));
    return result;
}

console.log(sortColleagues(colleagues.current, (c1, c2) => c1.contact.extension - c2.contact.extension));
console.log(sortColleagues(colleagues.current, (c1, c2) => c1.name.length - c2.name.length));

function findFriends(friends: Friend[], filter: (f: Friend) => boolean): String[] {
    const fs : Friend[] = friends.filter(filter)
    const s: String[] = fs.map((f) => f.name)
    return s
}

console.log(findFriends(friends, (f) => f.name.startsWith("Pa")));
console.log(findFriends(friends, (f) => f.age < 35));