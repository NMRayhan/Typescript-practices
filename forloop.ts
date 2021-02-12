const friends: string[] = ['nur', 'mohammad', 'rayhan', 'chandan', 'ojha', 'ragvi', 'ahmed', 'tamim', 'shiful', 'islam']

let megaFriend: string = '';
for (let i = 0; i < friends.length; i++) {
    const element: string = friends[i];
    if (element.length > megaFriend.length) {
        megaFriend = element
    }
}
console.log('Big Friend Name is ' + megaFriend);

