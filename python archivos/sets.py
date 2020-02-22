colores = {'rojo', 'verde', 'azul'}

print(type(colores))  #set
#ME QUEDE EN EL 2.07 DEL VIDEO
#DEL VIDEO CURSO PYTHON PARA PRINCIPIANTES
#FAZT

#CONTINUACION 
print('rojo' in colores)
del colores #con esto elimino coleres
#print(colores) // me marca error porque ya no existe colores

#diccionearios // es como una estructura de datos
datos = {
    'name': 'book',
    'cantidad': 3,
    'precio': 4.99
}

productos = [
    {
        'nombre': 'libro',
        'precio': 10
    },
    {
        'nombre': 'cuaderno',
        'precio': 3
    }
]

print(productos[1].get('nombre')) #me imprime cuaderno
