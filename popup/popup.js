window.onload = function () {
  const inputSpeed = document.getElementById("speed");

  document.getElementById("form").addEventListener("submit", function (event) {
    event.preventDefault();

    chrome.storage.sync.set({
      crazy_colors: document.getElementById("turned-on").value,
      crazy_speed: document.getElementById("speed").value,
      crazy_text: document.getElementById("text").value,
    });

    const x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () {
      x.className = x.className.replace("show", "");
    }, 3000);
  });
};
