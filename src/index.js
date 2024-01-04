(() => {
    const unsecureGiphyApiKey = "INWqTAWcseKKgDRV9L3NTAS1jVKAgUzY";
    const fetchGiphyApi =
        "https://api.giphy.com/v1/gifs/translate?api_key=INWqTAWcseKKgDRV9L3NTAS1jVKAgUzY&s=galaxies";

    const imageElement = document.createElement("img");
    const hintElement = document.createElement("div");
    document.body.append(imageElement);
    document.body.append(hintElement);

    function searchGiphy(keyword) {
        const apiCall = "https://api.giphy.com/v1/gifs/translate";
        const url = `${apiCall}?api_key=${unsecureGiphyApiKey}&s=${keyword}`;
        // const url = `${apiCall}?api_key=24&s=${keyword}`;
        fetch(url, { mode: "cors" })
            .then((response) => {
                const theResponse = response;
                console.log(theResponse);
                return theResponse.json();
            })
            .then((response) => {
                console.log(response);
                return imageElement.setAttribute(
                    "src",
                    response.data.images.fixed_height.url,
                );
            })
            .catch((response) => {
                hintElement.textContent =
                    "Something went wrong.  Check the format of your API call or change your search terms.";
                console.log(response);
            });
    }

    const formElement = document.createElement("form");
    const inputSearchElement = document.createElement("input");
    inputSearchElement.setAttribute("type", "text");

    const submitFormElement = document.createElement("input");
    submitFormElement.setAttribute("type", "submit");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        searchGiphy(inputSearchElement.value);
    });

    formElement.append(inputSearchElement);
    formElement.append(submitFormElement);
    document.body.append(formElement);

    fetch(".")
        .then((response) => {
            console.log("First Then");
            return response.text();
        })
        .then((response) => {
            console.log("Second Then", response);
        })
        .catch((response) => {
            console.log("Catch", response);
        });


    return {};
})();
