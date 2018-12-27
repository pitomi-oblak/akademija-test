//ovaj fajl startuje server odnosno pokrece app

import app from './app'; // koji god naziv da unesemo on ce da pokupi ono defaultno sto smo dali za export u app.ts fajlu

const port: number = 3000; //nodejs dozvoljava da izaberemo port koji cemo koristitit

app.listen(port, () => { // pokretanje servera
    console.log(__dirname);
    console.log(`Server is listening at port ${port}`);
});
