function receivesAFunction(spy) {
    return spy();

}
receivesAFunction(function() {});



function returnsANamedFunction() {
    return function findSum(){};
}

function returnsAnAnonymousFunction() {

    return function() {};
}