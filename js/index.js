
var quote1=document.getElementById('quotes')



quotearray=[]



function addQuote()

{

    var x={

oscar: "Be yourself; everyone else is already taken..Oscar Wilde",
marlin: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best..Marilyn Monroe ",
zappa: "So many books, so little time..Frank Zappa",
marcus:"A room without books is like a body without a soul..Marcus Tullius Cicero",
bernard:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.. Bernard M. Baruch",
mae:"You only live once, but if you do it right, once is enough .. Mae West",
    }


    quotearray.push(x.oscar,x.marlin,x.zappa,x.marcus);

   for (i=0; i<quotearray.length; i+=1)

    var randomIndex= Math.floor(Math.random()*quotearray.length);

var randomQuote= quotearray[randomIndex];
    {
        
        document.getElementById('quotes').innerHTML=randomQuote;

    };


}















    


