module.exports = function () {
    var service = {
        getMessage:getMessage
    };
    return service;

    function getMessage(){
        return 'Este es un mensaje generado en una libreria compartida!!!';
    }
};
