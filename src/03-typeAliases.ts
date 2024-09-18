import {ColleagueV2, Friend, Buddy, BuddyList, Administrator, Department} from './myTypes'
import {friends, colleagues} from './01-basics';

// convert colleagues to ColleagueV2
const colleaguesV2 : ColleagueV2[] = colleagues.current.map((c) => {
    return { name: c.name, department: c.department as Department, contact: c.contact }
})

function makeBuddyList(name: string, buddies: Buddy[], admin?: Administrator) : BuddyList {
    return { name, members: buddies, admin } as BuddyList
}

const myFootballBuddies = makeBuddyList("Football team", [colleaguesV2[0], friends[0], colleaguesV2[1]], colleaguesV2[0])
const myBandBuddies = makeBuddyList("Band name", [colleaguesV2[0], friends[1]])

console.log(myFootballBuddies)
console.log(myBandBuddies)

function findBuddyContact(list: BuddyList, name: string) : string | undefined {
    for (const buddy of list.members) {
        if (buddy.name === name) {
            if ("phone" in buddy) {
            return buddy.phone
        } else {
            return buddy.contact.email
        }
    }
    return undefined;
    }
}

console.log("Contact buddy at:" , findBuddyContact(myFootballBuddies, "Ralph Graham"))

function getBuddyListFriends(list: BuddyList) : Friend[] {
    var friends: Friend[] = []
    for (const buddy of list.members) {
        if ("phone" in buddy) {
            friends.push(buddy)
        }
    }
    return friends
}

console.log(getBuddyListFriends(myFootballBuddies))