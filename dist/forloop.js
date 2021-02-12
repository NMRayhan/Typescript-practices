"use strict";
var friends = ['nur', 'mohammad', 'rayhan', 'chandan', 'ojha', 'ragvi', 'ahmed', 'tamim', 'shiful', 'islam'];
var megaFriend = '';
for (var i = 0; i < friends.length; i++) {
    var element = friends[i];
    if (element.length > megaFriend.length) {
        megaFriend = element;
    }
}
console.log('Big Friend Name is ' + megaFriend);
