Instruktioner för användning av electronic-API:

1. Ställ dig i roten av projektet och installera alla npm paket (npm install). Detta behöver även göras i strapi-mappen "my-project". För att gå till strapi-mappen skriver du "cd my-project" i terminalen.

2. Sedan behöver du starta express och strapi (my project) samtidigt.

3. Öppna express genom att skriva "npm start" i terminalen när du befinner dig i roten av projektet. Serveradressen för express är http://localhost:8008

4. Samtidigt behöver du starta strapi genom att navigera till rätt mapp (cd my-project) och sedan skriva "npm start" i terminalen. Serveradressen för strapi är http://localhost:1337/api

5. Gå till postman och gör en GET request, till exempel: http://localhost:8008/computers, eller http://localhost:8008/computers/1 för att hämta information om datorn med id:1

(informationen om samlingarna är också synliga med endpoints: /computer, /audio, /mobiles,
/televisions).

6. Gör sedan alla CRUD-metoder via postman. För att göra POST/PUT/DELETE behöver du vara inloggad i postman.

för att lägga till ett nytt objekt använder du POST. Viktigt att klicka i "raw" och sen välja "JSON". Använd sedan JSON-format: { "data": { "name": "name", "description": "info", "maker": "maker", "price": price, "processor": "processor" }}.

För att updatera/ändra ett objekt, använd PUT och uppdatera adressfältet i det objekt du vill ändra.

För att radera ett objekt, använd DELETE. Fyll då i vilket objekt du önskar radera genom: localhost:8008/[samling]/[id].
