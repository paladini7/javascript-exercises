const sumAll = function(a,b) {
    let result = 0;
    if(a<0 || b<0){
        return "ERROR";
    }
    else if(typeof a !== 'number' || typeof b !== 'number') {
        return 'ERROR';
    }
    else if(a<b){
        for(let i=a;i<=b-1;i++){
            if(i===a) result += i;
            result+=i+1;
        }
    } else if(a>b){
        for(let i=b;i<=a-1;i++){
            if(i===b) result += i;
            result+=i+1;
        }
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
