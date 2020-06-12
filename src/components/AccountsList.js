/*
Henry Weisman
Accounts.js
Holds all of the accounts
*/

class AccountsList 
{

    //inits the empty account list
    constructor()
    {
        this.accountList = [];
    }

    //adds an account to the list
    addAccount(a)
    {
        const toAdd = {email: a.email,password: a.password};
        this.accountList.push(toAdd);
    }

    //checks if the account with the given email and password is found
    //returns true or false
    containsAccount(account)
    {
        for(let i = 0;i<this.accountList.length;i++)
        {
            if(this.accountList[i].email === account.email &&
                this.accountList[i].password === account.password)
            {
                return true;
            }
        }
        return false;
    }

    //prints each account in the list
    test()
    {
        for(let i = 0;i<this.accountList.length;i++)
        {
            console.log(this.accountList[i]);
        }
    }
}


export default AccountsList;