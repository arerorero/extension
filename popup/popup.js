window.onload = async function () {
  const inputTurnedOn = document.getElementById("turned-on");
  const inputSpeed = document.getElementById("speed");
  const inputText = document.getElementById("text");

  const oldData = await chrome.storage.sync.get();
  console.log(oldData);
  inputTurnedOn.checked = oldData.turned_on || false;
  inputSpeed.value = oldData.crazy_speed || 10;
  inputText.checked = oldData.text_on || false;

  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    chrome.storage.sync.set({
      turned_on: inputTurnedOn.checked,
      crazy_speed: inputSpeed.value,
      text_on: inputText.checked,
    });

    chrome.storage.sync.get(console.log);

    const x = document.getElementById("snackbar");
    x.className = "show";
  });
};
