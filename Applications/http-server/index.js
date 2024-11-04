// Import de la librairie HTTP fournie par NodeJS
const http = require('http');

require('dotenv').config();

// Définition du numéro de PORT
const PORT = process.env.PORT || 3000;


// Création du serveur
const server = http.createServer( (request, response) => {

    // Page / Message : Home
    // Requete sur "localhost:3000/" en methode GET
    if (request.url === '/' && request.method === 'GET') {

        // Définition de l'entete de la réponse
        response.writeHead(200, {
            'content-type': "text/plain"
        });
        response.end("Hello There !");
    }

    // Page contact
    else if (request.url === '/contact' && request.method === 'GET') {

        // Définition de l'entete de la réponse
        response.writeHead(200, {
            'content-type': "text/plain"
        });
        response.end("Get in touch at john@doe.com");
    }

    // 404 / Not Found
    else {
        response.writeHead(404, {
            'content-type': "text/plain"
        });
        response.end("Oooops, not found");
    }

});

// Demarrage du serveur
server.listen(PORT);