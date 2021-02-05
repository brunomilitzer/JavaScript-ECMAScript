function uploadToDB(){
    console.log('Uploading to DB.');
}

axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
    .then(function (response) {
        // //////////////////
        console.log(response)
        const getCoins = coinTemplate`<div class="col-sm-12 col-md-6>${response.data.Data}${function (){uploadToDB()}}</div>`; //Finish this line. it needs 1. tags 2.ajax data, and 3. callback to uploadToDB()
        // //////////////////

        document.querySelector('#add-button').addEventListener('click', function(){
            let coin = document.querySelector('#coin').value.toUpperCase();
            console.log(coin)
            let radios = document.getElementsByName('desire');
            // we cant map, because this is a nodelist, not an array. Good old for loop.
            let domEl;
            for(let i = 0; i < radios.length; i++){
                if (radios[i].checked){
                    domEl = `#${radios[i].id}-content`;
                    break;
                }
            };
            getCoins(coin, domEl); //this line is all set. It calls the function returned by your tag
        })
    })
    .catch(function (error) {
        console.log("ERROR!!!")
        console.log(error);
    });


var coinTemplate = function(elems, coinData, callback){
    // pre-parse the tags to make sure they are valid
    // Optionally also check for a valid tags
    return function(coin,location){
        try {
            const coinHTML = `
            ${elems[0]}
            <h3 class="name">${coinData[coin]['CoinName']}</h3>
            <div class="coin-image"><img src="https://www.cryptocompare.com${coinData[coin]['ImageUrl']}"/></div>
            <div class="algorith">${coinData[coin]['Algorithm']}</div>
            ${elems[1]} `
            document.querySelector(location).innerHTML += coinHTML;
        }catch(error) {
            console.log(error);
        }
    }
}