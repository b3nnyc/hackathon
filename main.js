const API_URL = "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY";

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
          const img = result.data.hdurl;

          console.log(imgTitle, imgDate, imgAuthor)
        
        })
        .catch((error) => {
          console.log("Unsuccessful response", error);
          addErrorMessageToSearchResults();
        });
    
    });
  
  }

api();
