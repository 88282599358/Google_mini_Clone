import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1";


// You will need to replace "YOUR_API_KEY" and "YOUR_CX_KEY" with your actual API key and custom search engine ID (CX)
const params = {
    key: "AIzaSyBpmTouqAl4HFQ1rWc5yGKP5nLdeVU4hTA",
    cx: "265a247d88ff24fb9",
};

export const fetchDataFromApi = async (payload) => {
    try {
        const { data } = await axios.get(BASE_URL, {
            params: { ...params, ...payload },
        });
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error fetching data from Google API:", error);
        throw error; // Rethrow the error so that the caller can handle it
    }
};


/*
This function, fetchDataFromApi, is exported as the main interface for making API requests. Here's how it works:

It is an asynchronous function, indicated by the async keyword, which means it can use await to wait for promises to resolve.

It takes a payload parameter, which should be an object containing additional query parameters that you want to send with the API request. 
These parameters can include things like the search query itself or any other optional parameters supported by the Google Custom Search API.

Inside the function, it uses Axios to make an HTTP GET request to the BASE_URL (the Google Custom Search API).

The params object, which contains your API key and CX(Custom Search Engine ID), is spread (...params) into the request's query parameters, 
along with any additional parameters provided in the payload object.

The response from the API is destructured, and only the data property of the response object is extracted.

Finally, the function returns the data property, which should contain the response data from the Google Custom Search API.

To use this code, you would import fetchDataFromApi in your application and call it with the appropriate payload
(e.g., the search query and any other optional parameters). 
The function will then make an API request to the Google Custom Search API and return the response data.

*/