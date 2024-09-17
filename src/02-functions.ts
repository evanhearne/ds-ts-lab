import {Friend, Colleague } from './myTypes'
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
function highestExtension(cs: Colleague[]): Colleague {
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