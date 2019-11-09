class Robot{
    name : string;
    apellido : string;

    saludar(): string{
    return ("hola soy" + " " + this.name + this.apellido);
    }

}

let miRobot = new Robot();
miRobot.name = "David";
miRobot.apellido = "Arteaga";

console.log(miRobot.saludar());
