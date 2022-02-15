const API_URL = "https://api.nasa.gov/planetary/apod?api_key=AEp43Nh1HaBkWgmooQhPNAcumFH5EqfncAcUBMB4";

const dateInput = document.getElementById("chosen__date");

function api() {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      //searchResultsEl.innerHTML = "";
      const searchTerm = event.target.date.value;
      axios
      .get(`${API_URL}&date=${searchTerm}`)
      .then((result) => {
          console.log("Successful response", result);
          
          const imgTitle = result.data.title;
          const imgDate = result.data.date;
          const imgAuthor = result.data.copyright || "No author specified";
          const imgCopy = result.data.explanation;
          const imgLink = result.data.hdurl;
          
          const mainElement = document.querySelector(".main")
          const mainTitle = document.querySelector(".main__title").innerText(imgTitle)
          const mainDate = document.querySelector(".main__date").innerText(imgDate)
          const mainAuthor = document.querySelector(".main__author").innerText(imgAuthor)
          const mainCopy = document.querySelector(".main__copy").innerText(imgCopy)
          const mainImg = document.querySelector(".main__left").src=(imgLink)
          
        })
        .catch((error) => {
            console.log("Unsuccessful response", error);
        });
    });
  }

api();
