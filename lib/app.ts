//ovaj fajl opisuje server app, kako se ponasa, sta radi
import express from 'express';
import { Request, Response } from 'express';
import path from 'path';
import { request } from 'http';
import hbs from 'hbs';

class App {
    app: express.Application;

    constructor() {
        this.app = express(); //cim se izvrsi app se ponasa kao web server, sad racunar dobija funckiju servera
        this.routes();
        this.config();
        // this.app.use(express.static(path.join(__dirname, "../public")));
    }
    config(): void {//stvari specificne za konfiguraciju
        this.app.use(express.static(path.join(__dirname, "../public")));
        hbs.registerPartials(path.join(__dirname, '../views/partials'));
        this.app.set('view engine', 'hbs');
        this.app.set('views', path.join(__dirname, '../views'));

    }
    routes(): void {
        const router = express.Router(); //definisanje ruta i akcija

        router.get('/', (req: Request, res: Response) => {
            //ako neko trazi url / sa tipom get uradi sledece
            //req i res moraju da se importuju
            //ovim se definisu rute
            res.send("<h1>Hello World</h1>");
            res.end();
        });

        router.get('/about', (req: Request, res: Response) => {
            res.render('about'); //uzmi template i prikazi dio po dio
        });

        router.get('/contacts', (req: Request, res: Response) => {
            res.render('contacts', {
                phoneNumber: '063111222',
                email: 'blabal@gmail.com'
            })
        });


        this.app.use('/', router); //ovim govorimo da ce nas server da koristi ove rute
        // / ->perfix za rutu koju koristimo da li hocemo ispred svake rute nesto da dodamo
    }
}

export default new App().app; 