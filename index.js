const { urlencoded } = require('express');
const express = require('express');
const port = process.env.PORT || 4122;
const booksRouter = express.Router();
const authorsRouter = express.Router();
const addbookRouter = express.Router();
const signupRouter = express.Router();
const signinRouter = express.Router();
const app = express();

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/addbook',addbookRouter);
app.use('/signup',signupRouter);
app.use('/signin',signinRouter);

app.get('/',function(req,res){
    res.render("index",
    {
        nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'}],
        nav1:[{link:'/signup',name:'SIGN UP'},{link:'/signin',name:'SIGN IN'}]
    });
});

var books = [
{
    title: 'STAY WITH ME',
    author: 'K L Slater',
    genre: 'Thriller',
    img: "1.jpg",
    more:'SHORTLISTED FOR THE 2017 BAILEYS WOMEN S PRIZE FOR FICTION SHORTLISTED FOR THE 2018 WELLCOME BOOK PRIZE LONGLISTED FOR THE 2018 INTERNATIONAL DYLAN THOMAS PRIZE NEW YORK TIMES 100 NOTABLE BOOKS OF 2017 Yejide is hoping for a miracle, for a child. It is all her husband wants, all her mother-in-law wants, and she has tried everything - arduous pilgrimages, medical consultations, appeals to God. But when her relatives insist upon a new wife, it is too much for Yejide to bear. It will lead to jealousy, betrayal and despair. Unravelling against the social and political turbulence of 1980s Nigeria, Stay With Me sings with the voices, colours, joys and fears of its surroundings. Ayobami Adebayo weaves a devastating story of the fragility of married love, the undoing of family, the wretchedness of grief, and the all-consuming bonds of motherhood. It is a tale about our desperate attempts to save ourselves and those we love from heartbreak.'
},
{
    title: 'SILENT SCREAM',
    author: 'Angela Marsons',
    genre: 'Psychological thriller',
    img: "2.jpg",
    more:'Even the darkest secrets can’t stay buried forever… Five figures gather round a shallow grave. They had all taken turns to dig. An adult sized hole would have taken longer. An innocent life had been taken but the pact had been made. Their secrets would be buried, bound in blood …Years later, a headmistress is found brutally strangled, the first in a spate of gruesome murders which shock the Black Country.But when human remains are discovered at a former children’s home, disturbing secrets are also unearthed. D.I. Kim Stone fast realises she’s on the hunt for a twisted individual whose killing spree spans decades.As the body count rises, Kim needs to stop the murderer before they strike again. But to catch the killer, can Kim confront the demons of her own past before it’s too late?'
},
{
    title: 'THE KITE RUNNER',
    author: 'Khaled Hosseini',
    genre: 'Drama',
    img: "3.jpg",
    more:'Afghanistan, 1975: Twelve-year-old Amir is desperate to win the local kite-fighting tournament and his loyal friend Hassan promises to help him. But neither of the boys can foresee what will happen to Hassan that afternoon, an event that is to shatter their lives. After the Russians invade and the family is forced to flee to America, Amir realises that one day he must return to Afghanistan under Taliban rule to find the one thing that his new world cannot grant him: redemption.'
},
{
    title: 'WHEN LOVE CAME CALLING',
    author: 'Preeti Shenoy',
    genre: 'Romance',
    img: "4.jpg",
    more:'Puja-19, confused, energetic, fiery. Her philosophy - Life is complicated and only super achievers have it figured out. Her strict mother sends her to a rural location in Kerala to spend her summer vacation doing volunteer work. Arush - 20, studious, careful, shy. Born and raised in Britain, he is elated when he gets an opportunity to spend 12 weeks in India, a place his parents are from and one he has never been to.When Puja and Arush meet, their stark differences are obvious to each other. But with choppy internet and no other distractions, they start getting to know each other and slowly fall in love. But falling in love and staying in love are not the same thing. When disaster strikes, Puja is forced to confront the harsh realities of life while Arush realises that India is not always the picture-perfect postcard he presumed it was. Desperately fighting to expose the truth and save themselves, what happens to their love? Is it strong enough to survive forces beyond their control? Is it deep enough to drown their own doubts?Sometimes you have to travel far to find your true self.An intensely gripping novel from Preeti Shenoy, about young love and discovery.'
}
]

authors = [
{
   name: "K L Slater",
   date: "United Kingdom",
   genre: "Suspense, Thriller",
   img: "5.jpg",
   more: "For many years, Kim sent her work out to literary agents but never made it off the slush pile. At the age of 40 she went back to Nottingham Trent University and now has an MA in Creative Writing."
},
{
    name: "Angela Marsons",
    date: "1960",
    genre: "Mystery",
    img: "6.jpg",
    more: "Angela Marsons is from Brierley Hill in the West Midlands and is a former security guard at the Merry Hill Shopping Centre. Having been rejected by numerous publishers over 25 years, she released three books in her crime series in 2015 under digital publisher Bookouture. Her books all have a Black Country setting, but the author says I never write about a set group of people or anyone particular I know, all my characters are make believe The principal character in the crime series is Detective Kim Stone. The success of the digitally-published Kim Stone books resulted in a print deal with publisher Bonnier Publishing Fiction. Marsons is signed to Bookouture for a total of 16 books in the Kim Stone series."
},
{
    name: "Khaled Hosseini",
    date: "4 March 1965",
    genre: "Fiction",
    img: "7.jpg",
    more: "Khaled Hosseini was born in Kabul, Afghanistan, in 1965. His father was a diplomat in the Afghan Foreign Ministry and his mother taught Farsi and history at a high school in Kabul. In 1976, the Foreign Ministry relocated the Hosseini family to Paris. They were ready to return to Kabul in 1980, but by then their homeland had witnessed a bloody communist coup and the invasion of the Soviet Army. The Hosseinis sought and were granted political asylum in the United States, and in September 1980 moved to San Jose, California. Hosseini graduated from high school in 1984 and enrolled at Santa Clara University, where he earned a bachelor’s degree in biology in 1988. The following year he entered the University of California, San Diego, School of Medicine, where he earned a medical degree in 1993. He completed his residency at Cedars-Sinai medical center in Los Angeles and was a practicing internist between 1996 and 2004."
},
{
    name: "Preeti Shenoy",
    date: "21 December 1971",
    genre: "Fiction, nonfiction", 
    img: "8.jpg",
    more: "Preeti Shenoy is an Indian author.She has been consistently nominated for the Forbes List of the 100 most influential celebrities in India since 2013.Preeti received the Indian of the Year award by Brands Academy.She has also received Business excellence award instituted by New Delhi Management Institute.India Today calls her 'the only woman in the highest-selling league,' alluding to the popularity of her books."
 }
]

booksRouter.get('/',function(req,res){
    res.render("books",
    {
        nav:[{link:'/books',name:'BOOKS'},{link:'/author',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'}],
        nav1:[{link:'/',name:'LOG OUT'}],
        books
    });
});
booksRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render("book",
    {
        nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'}],
        nav1:[{link:'/',name:'LOG OUT'}],
        book: books[id]
    });
});
authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
        nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'}],
        nav1:[{link:'/',name:'LOG OUT'}],
        authors
    });
});
authorsRouter.get('/:id',function(req,res){
    const id = req.params.id;
    res.render("author",
    {
        nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'}],
        nav1:[{link:'/',name:'LOG OUT'}],
        author: authors[id]
    });
});
addbookRouter.get('/',function(req,res){
    res.render("addbook",
    {
        nav:[{link:'/books',name:'BOOKS'},{link:'/authors',name:'AUTHORS'},{link:'/addbook',name:'ADD BOOK'}],
        nav1:[{link:'/',name:'LOG OUT'}],
    });
});
signupRouter.get('/',function(req,res){
    res.render("signup",
    {
        nav1:[{link:'/signup',name:'SIGN UP'},{link:'/signin',name:'SIGN IN'}] 
    });
});
signinRouter.get('/',function(req,res){
    res.render("signin",
    {
        nav1:[{link:'/signup',name:'SIGN UP'},{link:'/signin',name:'SIGN IN'}]
    }); 
});
app.listen(port);