let pending = 5;

async function date(e) {
  let date = e.target.previousSibling.previousSibling;
  date.style.setProperty(
    "text-decoration",
    event.target.checked ? "line-through" : "none"
  );
  console.log(date);

  e.target.checked ? pending-- : pending++;

  if (pending == 0) {
    document.getElementById("pending").innerText = "Completed!!!";
    document.getElementById('pending').style.setProperty('width', '62%');

    let btn = document.createElement("button");
    btn.innerText = "RESET";
     btn.id = 'resetBtnRajat';
    btn.onclick = () => { location.reload();};
    document.getElementById("pending").appendChild(btn);

  } else {
    document.getElementById("pending").innerText = "Pending: " + pending;
  }

  let play = new Audio("/chime.mp3");
  await play.play();
}
