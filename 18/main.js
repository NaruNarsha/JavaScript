
class Counter{
    constructor(runEveryFiveTimes){
        this.counter = 0;
        this.callback = runEveryFiveTimes;
    }


    increase(){
        this.counter++;

        console.log(this.counter);

        if(this.counter % 5 === 0)
        {
            this.callback && this.callback(this.counter);
        }
    }
}


const coolCounter = new Counter(printSomething);

function printSomething(counter){
    console.log(`5의 배수마다 호출됩니다. ${counter}`);
}

console.clear();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
coolCounter.increase();
