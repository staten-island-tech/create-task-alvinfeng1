async function bars() {
  try {
    const response = await fetch(
      "https://a3odwonexi.execute-api.us-east-2.amazonaws.com/default/Bars_API/"
    );
    const amiibosData = await response.json();
    if (response.status < 200 || response.status > 299) {
      console.log("poop");
    }
    console.log(amiibosData);
  } catch (error) {
    console.log(error);
    console.log("big poo");
  }
}
