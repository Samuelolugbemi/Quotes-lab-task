const quotes = [["Success is not final; failure is not fatal: It is the courage to continue that counts.","Winston. S Churchill"],  
["It is better to fail in originality than to succeed in imitation.","Herman Melville"],
["The road to success and the road to failure are almost exactly the same."," Colin R. Davis"],
["Success usually comes to those who are too busy to be looking for it.","Henry David Thoreau"],
["Opportunities don't happen. You create them.","Chris Grosser"],
["Don't be afraid to give up the good to go for the great.","John D. Rockefeller"],
["I find that the harder I work, the more luck I seem to have.","Thomas Jefferson"],
["There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.","Ray Goforth"],
["Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.","Jim Rohn"],
["Try not to become a man of success. Rather become a man of value."," Albert Einstein"],
["Never give in except to convictions of honor and good sense.","Winston Churchill"],
["Stop chasing the money and start chasing the passion.","Tony Hsieh"],
["Success is walking from failure to failure with no loss of enthusiasm.","Winston Churchill"],
["I owe my success to having listened respectfully to the very best advice, and then going away and doing the exact opposite.","G. K. Chesterton"],
["Would you like me to give you a formula for success? It's quite simple, really: Double your rate of failure. You are thinking of failure as the enemy of success. But it isn't at all. You can be discouraged by failure or you can learn from it, so go ahead and make mistakes. Make all you can. Because remember that's where you will find success.","Thomas J. Watson"],
["If you are not willing to risk the usual, you will have to settle for the ordinary.","Jim Rohn"],
["The ones who are crazy enough to think they can change the world, are the ones that do.","Anonymous"],
["Do one thing every day that scares you.","Anonymous"],
["All progress takes place outside the comfort zone.","Michael John Bobak"],
["People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.","Tony Robbins"],
["Don't let the fear of losing be greater than the excitement of winning.","Robert Kiyosaki"],
["If you really look closely, most overnight successes took a long time.","Steve Jobs"],
["The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.","Barack Obama"],
["The only limit to our realization of tomorrow will be our doubts of today.","Franklin D. Roosevelt"],
["Character cannot be developed in ease and quiet. Only through experience of trial and suffering can the soul be strengthened, ambition inspired, and success achieved.","Helen Keller"],
["The way to get started is to quit talking and begin doing.","Walt Disney"],
["The successful warrior is the average man, with laser-like focus.","Bruce Lee"],
["There are no secrets to success. It is the result of preparation, hard work, and learning from failure.","Colin Powell"],
["Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit.","Conrad Hilton"],
["If you really want to do something, you'll find a way. If you don't, you'll find an excuse.","Jim Rohn"]];

const colors = ["#317873", "#003366", "#001E3D", "#832323", "#B07B2A", "#503060","#B05080"];

let quoteBox = document.getElementById("quote");
let authorBox = document.getElementById("author");
let btn = document.getElementById("btn");
let body = document.getElementById("body");
let count = document.getElementById("demo");

btn.addEventListener("click",getRandomQuote);
let timer = setInterval(getRandomQuote,10000);

function getRandomQuote(){
    let qouteIndex = Math.floor(Math.random()* quotes.length);
    let colorIndex = Math.floor(Math.random()* colors.length);

    quoteBox.innerHTML = quotes[qouteIndex][0];
    authorBox.innerHTML = quotes[qouteIndex][1];
    btn.style.backgroundColor = colors[colorIndex];
    body.style.backgroundColor = colors[colorIndex];
    time = 9;
}
let time = 9;
let timer2 = setInterval(countDown,1000);
function countDown(){
        count.innerHTML = `${time} seconds`;
        time--;
}