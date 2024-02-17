import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const baseEndpoint = "https://kitsu.io/api/edge";
const apiKey = ""; // Add your API key here.

// Create an instance of the Express application.

const config = {
    headers: {
        "Content-Type": "application/vnd.api+json",
        "Accept": "application/vnd.api+json"
    }
};

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(express.static("public")); // Serve static files from the public directory

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/search", async (req, res) => {
    const animeTitle = req.body.title;
    const category = req.body.category;
    if (animeTitle) {
        try {
            const response = await axios.get(`${baseEndpoint}/anime?filter[text]=${animeTitle}`, config);
            const data = response.data.data;
            console.log(data);
            res.render("results.ejs", { data: data });
        } catch (error) {
            console.error("Failed to make request:", error.message);
            res.render("results.ejs", {
                error: "No results found."
            });
        }
    }
    else if (category) {
        try {
            const response = await axios.get(`${baseEndpoint}/anime?filter[categories]=${category}`, config);
            const data = response.data.data;
            console.log(data);
            res.render("results.ejs", { data: data });
        } catch (error) {
            console.error("Failed to make request:", error.message);
            res.render("results.ejs", {
                error: "No results found."
            });
        }
    }
});


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});