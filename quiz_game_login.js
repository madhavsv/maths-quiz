function adduser () {
    player1_name=document.getElementById("player1_name_input").value;
    player2_name=document.getElementById("player2_name_input").value;

    localStorage.setItem("opponent1",player1_name);
    localStorage.setItem("opponent2",player2_name);

    window.location="quiz_game_page.html";
}
