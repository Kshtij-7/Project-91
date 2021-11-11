function addUser() {
    if (document.getElementById('player1_name').value == null) {
        document.getElementById('errorbox1').innerHTML = 'Please enter a username here'
    }

    else if (document.getElementById('player2_name').value == null) {
        document.getElementById('errorbox2').innerHTML = 'Please enter a username here'
    }

    else {
        var User1name = document.getElementById('player1_name').value;
        var User2name = document.getElementById('player2_name').value;

        localStorage.setItem('User1name', `${User1name}`)
        localStorage.setItem('User2name', `${User2name}`)

        window.location = 'game_page.html'

    }
}