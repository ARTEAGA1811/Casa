msg  = "hi world,jaajajaj"
print(msg)

#este codigo es para imprimir en pantalla
print(type("hola munda jajaj")) #con el type puedo assaber que tipo de dato es

#lista
lista = [10, True, "hola amigo", 3.4]
#puedo volverlo a cambiar despues

#tupla
EStoEsUnatupla = (10, True, "holaAmigo", 3.4)
#es una constanto, no puede cambiar

#diccionario
estructuraDeDatos_o_diccionario = {
    'nombre': "David",
    'apellido': "Arteaga"
}

print(lista, EStoEsUnatupla, estructuraDeDatos_o_diccionario)
None # es algo que no tiene tipo de dato

# se puede guardar variables de la siguiente manera
guardoNumero, miLibro = 100, "Narnia"
print(guardoNumero, miLibro)

PI = 3.1416 # es una convencion en python que las variables que
#no quiero que cambien, le pongo todo en mayuscula

print(msg.upper()) # todos mayuscuklas
print(msg.lower()) # todos minusculas
print(msg.capitalize()) #cambia la primera letra a mayus
print(msg.replace("hi", "bye")) #cambia la palabra que querramos //bye world
print(msg.count('l')) # cuenta cuantas veces esta la letra l en la palabra
print(msg.startswith('hoka')) # si empieza el texto con hoka, me manda true //false
print(msg.endswith('a')) #si termina en a me manda true // true
print(msg.split()) # me separa cada palabra por un espacio en blanco 
print(msg.split(',')) # me separa cuando haya una coma
print(msg.find('w')) # me busca la posicion de la posicion de w, empieza en 0 //3
print(msg[6]) # me imprime solo lo que este en la posicion 6. //l
print('hola este es un saludo:', msg)
print(f'hola es {msg} asgfsag') #varias formas de mandar a imprimer
print('hola amigo: ' + msg)

##edad =  input('inserte el valor de su edad: ') #se guarda como un string
##EdadMasDiez = int(edad) + 10  # con esto le cambiamos de string a entero
##print(EdadMasDiez)

#********************************* LISTAS

misNumeroDeLista = list([1,2,3,4])
print(misNumeroDeLista)

imprimirDelUnoAlDiez = list(range(1,11))
print(imprimirDelUnoAlDiez) ## IMPORTANTE

print((dir(imprimirDelUnoAlDiez))) # me manda la info de lo que puedo hacer con una lista

print(len(imprimirDelUnoAlDiez)) # saber cuantos elementos tiene el array
print(3 in imprimirDelUnoAlDiez) # true o false depende si esta en el array //True

colores = ['amarillo', 'verde', 'rojo']

colores.append('violeta') # agrego un elemento a la lista, solo uno
print(colores)

colores.extend(['rosado', 'naranja']) #puedo agregar varios elementos a la lista
print(colores) #pero deben esta en una lista o tupla [] ()
colores.insert(1, 'negro') #agrega un elemento en la posicion que deseamos
print(colores)
colores.pop() #elimino el ultimo elemento
print(colores)

colores.pop(0) #elimino el primer elemento de la lista
print(colores)

colores.clear() #me elimina todos loselementos de la lista

print(colores) #[]

##########################
frutas = ['naranja', 'pera', 'manzana', 'tamarindo']
#frutas.sort() # los ordena alfabeticamente
print(frutas)
#frutas.reverse() # los ordena al reves, le da la vuelta a la lista
frutas.index('pera') # me indica en que posicion esta pera


