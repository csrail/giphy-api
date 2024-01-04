(() => {
    const unsecureGiphyApiKey = "INWqTAWcseKKgDRV9L3NTAS1jVKAgUzY";
    const fetchGiphyApi =
        "https://api.giphy.com/v1/gifs/translate?api_key=INWqTAWcseKKgDRV9L3NTAS1jVKAgUzY&s=galaxies";

    const imageElement = document.createElement("img");
    const hintElement = document.createElement("div");
    document.body.append(imageElement);
    document.body.append(hintElement);

    async function searchGiphy(keyword) {
        const apiCall = "https://api.giphy.com/v1/gifs/translate";
        const url = `${apiCall}?api_key=${unsecureGiphyApiKey}&s=${keyword}`;
        // const url = `${apiCall}?api_key=24&s=${keyword}`;
        try {
            const fetchResponse = await fetch(url, { mode: "cors" });
            const data = await fetchResponse.json();
            return imageElement.setAttribute(
                "src",
                data.data.images.fixed_height.url,
            );
        } catch (error) {
            hintElement.textContent =
                "Something went wrong.  Check the format of your API call or change your search terms.";
            return console.log(error);
        }
    }

    const formElement = document.createElement("form");
    const inputSearchElement = document.createElement("input");
    inputSearchElement.setAttribute("type", "text");

    const submitFormElement = document.createElement("input");
    submitFormElement.setAttribute("type", "submit");

    formElement.addEventListener("submit", (event) => {
        event.preventDefault();
        return searchGiphy(inputSearchElement.value);
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
