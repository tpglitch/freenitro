import generateNitro from "./generateNitro";
import 'dotenv/config';
import express from 'express';
import { engine } from 'express-handlebars';

const port = process.env.PORT || 3000;

const app = express();

app.engine('.hbs', engine({
    extname: '.hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/api/nitro', async (req: express.Request, res: express.Response) => {
    let gen = await generateNitro();
    res.type('application/json');
    res.send({ link: gen });
});
app.get('/nitroRedirect', (req: express.Request, res: express.Response) => {
    if (req.query && req.query.url) {
        let e: any = req.query.url;
        res.redirect(e);
        return;
    }
});


app.get('/', (req: express.Request, res: express.Response) => {
    res.render('nitro', { title: 'Nitro' });
});


app.listen(port, () => {
    console.log(`App on http://0.0.0.0:${port}`);
});