const enum MediaTypes {
    JSON = "application/json",
    JSON2 = "application/json"
}

fetch("https://example.com/api/endpoint", {
    headers: {
        Accept: MediaTypes.JSON
    }
}).then(response => {
    // ...
});
