# MongoBodegas :sparkles:

¡Welcome to the MongoBodega project! This project is mainly based on the storage of some products in systems such as warehouses, histories and inventories, this exercise is designed to practice and learn about the syntax and queries in MongoDB from NodeExpress. Below you will find important information for setting up and using this project.



## Index 📑:sparkles:

- [Config](#config)
  - [tsconfig.json](#configuración-del-archivo-tsconfigjson)
  - [.env](#archivo-env)
- [Instalación](#instalación-de-dependencias-y-funcionamiento)
- [Generar Tokens](#generar-tokens)
- [Endpoints](#endpoints)
  - [Alquiler](#alquiler)
  - [Automóvil](#automóvil)
  - [Cliente](#cliente)
  - [Empleado](#empleado)
  - [Registro Devolución](#registro-devolución)
  - [Registro Entrega](#registro-entrega)
  - [Reserva](#reserva)
  - [Sucursal Automóvil](#sucursal-automóvil)
  - [Sucursal](#sucursal)



## Config ⚙️

Before you begin, make sure you've set up your project correctly.



### :bookmark:  "`tsconfig.json`" File

Be sure that your `tsconfig.json` file is set to the following values:

```json
{
  "compilerOptions":{
      "target":"es6",
      "module":"ES6",
      "moduleResolution":"node",
      "outDir":"./dtocontroller",
      "esModuleInterop":true,
      "experimentalDecorators":true,
      "emitDecoratorMetadata": true
  }
}
```



### :bookmark: "`.env`" File 

Set the `.env` file in the root of the project and fill it with your necessary information:

```env

Default:
        MY_CONFIG={"hostname":"localhost", "port":5055}
        ATLAS_USER = "vicky"
        ATLAS_PASSWORD = "vmvmvm12345"
        ATLAS_DB ="db_bodegas_mongo"
        JWT_PRIVATE_KEY="ubuntuwu"
        
Example:
        MY_CONFIG={"hostname":"localhost", "port":3000}
        ATLAS_USER="yourUserMongoAtlas"
        ATLAS_PASSWORD="yourPasswordMongoAtlas"
        ATLAS_DB="yourDatabaseMongo"
        JWT_PRIVATE_KEY="yourPrivateKeyforJWT"
        
```



### :bookmark: DevDependencies

Make sure you have the following installed before starting the project:

```json
"devDependencies": {
    "body-parser": "1.20.2",
    "class-transformer": "0.5.1",
    "class-validator": "0.14.0",
    "dotenv": "16.3.1",
    "express": "4.18.2",
    "express-rate-limit": "6.9.0",
    "jose": "4.14.4",
    "mongodb": "5.7.0",
    "node": "20.5.0",
    "nodemon": "3.0.1",
    "reflect-metadata": "0.1.13",
    "typescript": "5.1.6"
  }
```

for this you can use the command ``npm i``  from the terminal.



## Installation of Dependencies and Operation 🚀

Follow these steps to install and run the project:

1. Clone this repository to your local machine. ``https://github.com/VickyMontanezCampus/mongoBodegas.git``

2. Open a terminal and navigate to the project folder.

3. Start the server using the command `npm run dev`.

4. In another terminal, without closing the previous one, compile the `tsconfig.json` file with `npm run tsc`  in another console.

5. Access the `db` folder in your MongoDB environment and execute the contents of the `query.mongodb` file to set up the database and collections.

6. Proceed with the [Generate Tokens](#generate-tokens) step to be able to use the endpoints.

   

## Generate Tokens 🔑

To use the endpoints, you'll need to generate tokens for each collection. Follow these steps:

1. In your web browser or API client, enter the following URL with the name of the desired collection to obtain a token:

   ```
   http://localhost:5055/token/:collection
   ```

   Replace `:collection` with one of the following names:

   - bodegas
   - historiales
   - inventarios
   - productos

2. Copy the generated token.

3. Open your API client (such as Postman) and configure the header:

   ```
   Authorization: Token generated
   ```

4. If you are using Thunder Client:

   1. You should create a New Request.
   2. Navigate to the "Headers" section.
   3. In the HTTP headers, you can input:

   ```
   Authorization: Token generated
   ```

   Make sure to replace "Token generated" with the token you copied.

## Endpoints 🛣️

### Alquiler

#### Get

La siguiente url trae todos los datos e información sobre la collection Alquiler

- http://localhost:5022/alquiler/get

La siguiente url obtiene todos los automóviles disponibles para alquiler.

- http://localhost:5022/alquiler/get/Disponible

La siguiente url busca un alquiler por su id

- http://localhost:5022/alquiler/search/alq/3

La siguiente url obtiene el costo total de un alquiler específico

- http://localhost:5022/alquiler/get/costo/4

La siguiente url obtiene los detalles del alquiler que tiene fecha de inicio en '2023-09-05'.

- http://localhost:5022/alquiler/get/fecha/2023-09-05

La siguiente url obtiene los datos de los clientes que realizaron al menos un alquiler

- http://localhost:5022/alquiler/get/clientes/unalq

La siguiente url obtiene  la cantidad total de alquileres registrados en la base de datos. 

- http://localhost:5022/alquiler/get/totalalquiler/cantidad

La siguiente url obtiene los alquileres con fecha de inicio entre '2023-07-05' y '2023-07-10

- http://localhost:5022/alquiler/get/alq/fecha/between/2023-07-15/2023-09-05



#### Post

El siguiente enlace es para enviar data a la collection alquiler, inserta la data con todos los campos

- http://localhost:5022/alquiler/post

```
{
  "_id": 7,
  "ID_Alquiler": 7,
  "ID_Cliente_id": 8,
  "ID_Automovil_id": 8,
  "Fecha_Inicio": "2023-07-15",
  "Fecha_Fin":  "2023-07-20",
  "Costo_Total": 250.5,
  "Estado": "Retenido"
 }
```

#### Put

El siguiente enlace es para actualizar data a la collection alquiler, actualiza la data con todos los campos

- http://localhost:5022/alquiler/put/7

```
{
  "_id": 7,
  "ID_Alquiler": 7,
  "ID_Cliente_id": 8,
  "ID_Automovil_id": 9,
  "Fecha_Inicio": "2023-07-15",
  "Fecha_Fin":  "2023-07-10",
  "Costo_Total": 345,
  "Estado": "Actualizado"
 }
```

#### Delete

El siguiente enlace es para eliminar data de la collection alquiler

- http://localhost:5022/alquiler/delete/7



### Automóvil

#### Get

La siguiente url obtiene todos los datos de la collection automóvil

- http://localhost:5022/automovil/get

La siguiente url muestra todos los automóviles con una capacidad mayor a 5 personas

- http://localhost:5022/automovil/get/capacidad/mayor

Listar todos los automóviles ordenados por marca y modelo.

- http://localhost:5022/automovil/get/orden/marca/modelo

Mostrar los automóviles con capacidad igual a 5 personas y que estén disponibles.

- http://localhost:5022/automovil/get/igual/cantidadPerson

#### Post

Insertar datos a la collection automóvil, aquí te muestro los datos para enviar

-  http://localhost:5022/automovil/post

```
{
  "_id": 8,
  "ID_Automovil": 8,
  "Marca": "Prueb",
  "Modelo": 2022,
  "Anio": 2021,
  "Tipo": "carro",
  "Capacidad": 5,
  "Precio_Diario": 34453452525
 }
```

#### Put

Actualizar datos a la collection automóvil, aquí te muestro los datos para actualizar

-  http://localhost:5022/automovil/put/8

```
{
  "_id": 8,
  "ID_Automovil": 8,
  "Marca": "Actualizado",
  "Modelo": 2006,
  "Anio": 2021,
  "Tipo": "moto",
  "Capacidad": 2,
  "Precio_Diario": 324324
 }
```

#### Delete

Eliminar datos insertados en la collection por un id especifico

-  http://localhost:5022/automovil/put/8



### Cliente

#### Get

Obtiene todos los clientes únicamente el nombre y el apellido

- http://localhost:5022/cliente/get

Listar los clientes con el DNI específico.

- http://localhost:5022/cliente/get/378956421

Listar todos los alquileres activos junto con los datos de los clientes relacionados.

- http://localhost:5022/cliente/get/alquileres/activos

#### Post

Envía la data, inserta data en la collection, inserta estos datos:

- http://localhost:5022/cliente/post

```
{
    "_id": 8,
    "ID_Cliente": 8,
    "Nombre": "Natalia",
    "Apellido": "Fuentes",
    "DNI": 46553,
    "Direccion": "Calleporahi",
    "Telefono": 315873905,
    "Email": "natha@gmail.com"
}
```



#### Put

Actualiza los datos segun el id que ponga en la url

- http://localhost:5022/cliente/put/8

```
{
    "_id": 8,
    "ID_Cliente": 8,
    "Nombre": "Juan1",
    "Apellido": "Castro",
    "DNI": 23342,
    "Direccion": "Piedecuesta",
    "Telefono": 3224536,
    "Email": "castro@gmail.com"
}
```

#### Delete

Elimina los datos por un id especifico  en la url

- http://localhost:5022/cliente/delete/8



### Empleado

#### Get

Lista todos los datos sobre todos los empleados

- http://localhost:5022/empleado/get

Listar los empleados con el cargo de "Vendedor". 

- http://localhost:5022/empleado/get/cargo

Mostrar los empleados con cargo de "Gerente" o "Asistente".

- http://localhost:5022/empleado/get/cargo/gerente/asistente

#### Post

Se envía o inserta data a la collection empleado, aplicando el dto

http://localhost:5022/empleado/post

```
{
    "_id": 8,
    "ID_Empleado": 8,
    "Nombre": "pepito",
    "Apellido": "perez",
    "DNI": 56436,
    "Direccion": "Calle 10",
    "Telefono": 565687,
    "Cargo": "Garantias"
  }
```

#### Put

Se actualiza  la collection empleado, aplicando el dto, se actualiza por un id especifico

http://localhost:5022/empleado/put/8

```
{
    "_id": 8,
    "ID_Empleado": 8,
    "Nombre": "Juan",
    "Apellido": "Avila",
    "DNI": 565658,
    "Direccion": "Provenza",
    "Telefono": 343436,
    "Cargo": "EStudiante"
  }
```

#### Delete

Se elimina la collection empleado, se elimina por un id especifico

http://localhost:5022/empleado/delete/8



### Registro Devolución 

#### Get

Lista todos los datos sobre registro devolución

- http://localhost:5022/registrodev/get

#### Post

Se envía o inserta data a la collection registro devolución, aplicando el dto

http://localhost:5022/registrodev/post

```
{
    "_id": 6,
    "ID_Registro": 6,
    "ID_Alquiler_id": 3,
    "ID_Empleado_id": 2,
    "Fecha_Devolucion": "2023-25-16",
    "Combustible_Devuelto": 22.4,
    "Kilometraje_Devuelto": 3454353,
    "Monto_Adicional": 15000
  }
```

#### Put

Se actualiza  la collection registro devolución, aplicando el dto, se actualiza por un id especifico

http://localhost:5022/registrodev/put/6

```
{
    "_id": 6,
    "ID_Registro": 6,
    "ID_Alquiler_id": 5,
    "ID_Empleado_id": 1,
    "Fecha_Devolucion": "2022-02-16",
    "Combustible_Devuelto": 24.4,
    "Kilometraje_Devuelto": 83747438,
    "Monto_Adicional": 1000
  }
```

#### Delete

Se elimina la collection registro devolución, se elimina por un id especifico

http://localhost:5022/registrodev/delete/6





### Registro Entrega

#### Get

Con la siguiente url podrás listar todos los registros de entrega

- http://localhost:5022/registroentrega/get

#### Post

Se envía o inserta data a la collection registro entrega, aplicando el dto

- http://localhost:5022/registroentrega/post

```
{
    "_id": 6,
    "ID_Registro": 6,
    "ID_Alquiler_id": 6,
    "ID_Empleado_id": 4,
    "Fecha_Entrega": "2021-04-05",
    "Combustible_Entregado": 25.2,
    "Kilometraje_Entregado": 18000
  }
```

#### Put

Se actualiza  la collection registro entrega, aplicando el dto, se actualiza por un id especifico

http://localhost:5022/registroentrega/put/6

```
{
    "_id": 6,
    "ID_Registro": 6,
    "ID_Alquiler_id": 5,
    "ID_Empleado_id": 1,
    "Fecha_Devolucion": "2022-02-16",
    "Combustible_Devuelto": 24.4,
    "Kilometraje_Devuelto": 83747438,
    "Monto_Adicional": 1000
  }
```

#### Delete

Se elimina la collection registro entrega, se elimina por un id especifico

http://localhost:5022/registroentrega/delete/6





### Reserva

#### Get

Lista todos los datos de las reservas ingresadas a la collection

- http://localhost:5022/reserva/get

Mostrar todas las reservas pendientes con los datos del cliente y el automóvil reservado.

- http://localhost:5022/reserva/get/pendientes/dataclient

Listar las reservas pendientes realizadas por un cliente específico. (3)

- http://localhost:5022/reserva/get/pendiente/clientespecifico/3

#### Post

Con la siguiente url te envia la data insertada en el body

- http://localhost:5022/reserva/post

```
{
    "_id": 6,
    "ID_Reserva": 6,
    "ID_Cliente_id": 1,
    "ID_Automovil_id": 1,
    "Fecha_Reserva": "2008-06-02",
    "Fecha_Inicio": "2024-02-10",
    "Fecha_Fin": "2024-02-15",
    "Estado": "Pueba"
  }
```

#### Put

Con la siguiente url te actualiza la data insertada en el body

- http://localhost:5022/reserva/post

```
{
    "_id": 6,
    "ID_Reserva": 6,
    "ID_Cliente_id": 3,
    "ID_Automovil_id": 1,
    "Fecha_Reserva": "2002-06-02",
    "Fecha_Inicio": "2018-02-10",
    "Fecha_Fin": "2022-02-15",
    "Estado": "Actualizado"
  }
```

#### Delete

Con la siguiente url se elimina la data insertada segun el id especificado en la url

- http://localhost:5022/reserva/delete/6



### Sucursal Automóvil

#### Get

La siguiente url enlista toda la información acerca sucursal automóvil

- http://localhost:5022/sucursal/automovil/get

#### Post

Por medio de esta url se puede enviar data, poniéndolo primero en el body luego enviándolo

- http://localhost:5022/sucursal/automovil/post

```
{
    "_id": 6,
    "ID_Sucursal_id": 3,
    "ID_Automovil_id": 4,
    "Cantidad_Disponible": 1
  }
```

#### Put

Por medio de esta url se puede actualizar data poniendo el id a modificar en la url, poniéndolo primero en el body luego enviándolo

- http://localhost:5022/sucursal/automovil/put/6

```
{
    "_id": 6,
    "ID_Sucursal_id": 3,
    "ID_Automovil_id": 5,
    "Cantidad_Disponible": 345
  }
```

#### Delete

Por medio de la siguiente url poniendo el id especifico podras eliminar ese dato

- http://localhost:5022/sucursal/automovil/delete/6



### Sucursal

#### Get

La siguiente url te permite obtener todos los datos completos sobre la collection sucursal

- http://localhost:5022/sucursal/get

Mostrar la cantidad total de automóviles disponibles en cada sucursal. 

- http://localhost:5022/sucursal//get/automoviles/disponibles

Mostrar la cantidad total de automóviles en cada sucursal junto con su dirección.

- http://localhost:5022/sucursal/get/automoviles/total/direccion

#### Post

Por medio de esta url se puede enviar data a la collection sucursal insertando la data a enviar en el body del thunder luego enviarla

- http://localhost:5022/sucursal/post

```
{
    "_id": 7,
    "sucursal_id": 7,
    "Nombre": "Polo",
    "Direccion": "ALlamar",
    "Telefono": [35938502]
  }
```

#### Put

Por medio de esta url se puede actualizardata a la collection sucursal actualizando la data a enviar en el body del thunder luego enviarla

- http://localhost:5022/sucursal/put/7

```
{
    "_id": 7,
    "sucursal_id": 7,
    "Nombre": "Granada",
    "Direccion": "La27",
    "Telefono": [345345]
  }
```

#### Delete

Por medio de esta url se puede eliminar la data por un id especifico

- http://localhost:5022/sucursal/delete/7