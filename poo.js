var Robot = (function () {
    function Robot() {
    }
    Robot.prototype.saludar = function () {
        return "hola soy" + " " + this.name + this.apellido;
    };
    return Robot;
})();
var miRobot = new Robot();
miRobot.name = 'David';
miRobot.apellido = 'Arteaga';
console.log(miRobot.saludar());
