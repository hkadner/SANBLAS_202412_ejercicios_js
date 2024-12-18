async function getData() {
    const url = "https://example.org/products.json";
    console.log("paso 1");
    try {
      const response = await fetch(url);
      console.log("paso 2");
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  