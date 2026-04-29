async function getData() {
    const response = await fetch ("https://api.thecatapi.com/v1/images/search");

    if (!response.ok) {
        console.error("APIリクエストに失敗しました");
        return;
    }

    const data = await response.json();

    const imgUrl = data[0].url;
    
    const result = document.querySelector(".result");
    if (!result) {
        console.log("resultはnullです");
        return;
    }

    const img = document.createElement("img");

    img.src = imgUrl;
    img.alt = "猫の画像";

    result.innerHTML = "";
    result.appendChild(img);
}