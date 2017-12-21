import ajax from './ajax';

var fnName = 'init';

var a = {
    exec() {
        this[fnName]();
    },
    init() {
        fnName = 'usual';

    },
    usual() {

    },
}