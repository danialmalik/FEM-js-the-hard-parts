{
    function getCounter() {
        let counter = 0;
        return function incrementCounter() {
            counter++;
            console.log(counter)
            return incrementCounter;
        }
    }
    const counter1 = getCounter()
    const counter2 = getCounter()

    counter1()()()()
}

////////////////////
{
    function getCounter() {
        let counter = 0;
        return function incrementCounter() {
            return counter++;
        }
    }
    const counter1 = getCounter()
    const counter2 = getCounter()

    console.log(counter1())
    console.log(counter1())
    console.log(counter1())

    console.log(counter2())
    console.log(counter2())
    console.log(counter2())
}
