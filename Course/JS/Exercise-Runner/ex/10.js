//ex 10

var friendsCount = prompt("Enter number of friends:");

if (friendsCount > 500) {
    console.log('OMG, a celebrity!')
} else if (friendsCount > 300) {
    console.log('You are well connected!')
} else if (friendsCount > 100) {
    console.log('You know some people...')
} else if (friendsCount > 0) {
    console.log('Quite picky, aren\'t you?')
} else {
    console.log('Let\'s be friends!')
}