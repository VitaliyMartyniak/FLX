const number1 = 1;
const number2 = 2;
const number3 = 3;
const card1 = userCard(number1);
const card2 = userCard(number2);
const card3 = userCard(number3);

function userCard (number) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key = number;  
    let date = function () {
        let now = new Date();
        let formattedDay = now.getDate();
        let formattedMonth = now.getMonth() + 1;
        let formattedYear = now.getUTCFullYear();
        let formattedHour = now.getHours();
        let formattedMinutes = now.getMinutes();
        let formattedSeconds = now.getSeconds();
        let formattedFullDate = formattedDay + '/' + formattedMonth + '/' + formattedYear + 
        ', ' + formattedHour + ':' + formattedMinutes + ':' + formattedSeconds;
        return formattedFullDate
      } 
    return {
        getCardOptions: function(){
            return {
                balance: balance,
                transactionLimit: transactionLimit,
                historyLogs: historyLogs,
                key: key
            }
        },

        putCredits: function(amount){
            balance += amount;
            historyLogs.push({operationType: 'Received credits',credits: amount,operationTime: date()})
        },

        takeCredits: function(amount){
            if(transactionLimit >= amount && balance >= amount){
                balance -= amount;
                historyLogs.push({operationType: 'Withdrawal of credits',credits: amount,operationTime: date()});
            } else {
                console.error('Change your transaction limit or fill your balance');
            }
        },

        setTransactionLimit: function(limit){
            transactionLimit = limit;
            historyLogs.push({operationType: 'Transaction limit change',credits: limit,operationTime: date()});
        },

        transferCredits: function(amount, recipientCard){
            if(transactionLimit >= amount && balance >= amount){
                let percent = 100;
                let tax = 0.5;
                let percentedAmount = amount / percent * tax;
                let transferedAmount = amount + percentedAmount;
                balance -= transferedAmount;
                recipientCard.putCredits(amount) 
            } else {
                console.error('Change your transaction limit or fill your balance');
              }
        },
        
        historyLogs: function(){
           return{
                historyLogs
           } 
        }
    }
}


class UserAccount {
    constructor (name) {
        this.name = name;
        this.cards = [];
        this.maxCards = 3;
    }

    addCard(){
        if( this.maxCards > this.cards.length) {
            this.cards.push(userCard(this.cards.length + 1))
        } else {
            console.error('Too many cards!');
        }
    }

    getCardByKey(key) { 
        if(key > this.maxCards) {
            return 'Card is not found';
    } else {
            return this.cards[key - 1];
    }
    }
}    





