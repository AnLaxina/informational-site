import express from "express";
import path from "path";
const app = express();
// Since CommonJS is kind of fading, __dirname doesn't exist anymore
const __dirname = import.meta.dirname;

app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));
app.get("/about", (req, res) =>
    res.sendFile(path.join(__dirname, "pages", "about.html"))
);
app.get("/contact-me", (req, res) =>
    res.sendFile(path.join(__dirname, "pages", "contact-me.html"))
);

app.use((req, res) =>
    res.status(404).sendFile(path.join(__dirname, "pages", "404.html"))
);
const PORT = 3000;
app.listen(PORT, (error) => {
    // This is important since any errors will silently fail
    // with no error message
    if (error) {
        throw error;
    }

    console.log(`It's the Siberian Express! Running on PORT ${PORT}`);
});
