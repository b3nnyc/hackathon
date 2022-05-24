const API_URL =
  "https://api.nasa.gov/planetary/apod?api_key=AEp43Nh1HaBkWgmooQhPNAcumFH5EqfncAcUBMB4";
let chosenDate;
function format(str) {
  return str
    .split(".")
    .map((sentence, i) => (i % 3 === 0 && i != 0 ? sentence + ".\n" : sentence))
    .join("");
}
function callApi(url) {
  axios
    .get(url)
    .then((result) => {
      on();
      const imgTitle = result.data.title;
      const imgDate = result.data.date;
      const imgAuthor = result.data.copyright || "nasa.gov";
      const imgCopy = result.data.explanation;
      const imgLink = result.data.hdurl;

      const mainTitle = (document.querySelector(".main__title").innerText =
        imgTitle);
      const mainDate = (document.querySelector(".main__date").innerText =
        imgDate);
      const mainAuthor = (document.querySelector(".main__author").innerText = 'by '+
        imgAuthor);
      const mainCopy = (document.querySelector(".main__copy").innerText =
        format(imgCopy));
      const mainImg = (document.querySelector(".main__img").src = imgLink);
    })
    .catch((error) => {
      console.log("Unsuccessful response", error);
    });
}

const todayApi = () => {
  callApi(API_URL);
};

function datedApi() {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    //searchResultsEl.innerHTML = "";
    const searchTerm = event.target.date.value;
    chosenDate = searchTerm;
    if (new Date() >= new Date(searchTerm).getTime()) {
      const newApi = `${API_URL}&date=${searchTerm}`;
      callApi(newApi);
      off();
    } else {
      Swal.fire(
        "No Photographic reports for future dates!!!",
        "Check back later",
        "warning"
      );
    }
    event.target.reset();
  });
}

datedApi() || todayApi();

function off() {
  document.getElementById("overlay").style.display = "none";
}

function on() {
  document.getElementById("overlay").style.display = "block";
  setTimeout(()=>off(), 3000);

}
