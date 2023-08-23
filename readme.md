# MongoBodegas :sparkles:

¡Welcome to the MongoBodega project! This project is mainly based on the storage of some products in systems such as warehouses, histories and inventories, this exercise is designed to practice and learn about the syntax and queries in MongoDB from NodeExpress. Below you will find important information for setting up and using this project.





![](https://raw.githubusercontent.com/VickyMontanezCampus/mongoBodegas/main/assets/img/database_bodegas.png)

## Config ⚙️

Before you begin, make sure you've set up your project correctly.

### :red_circle:  "`tsconfig.json`" File

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



### :red_circle: "`.env`" File 

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



### :red_circle: DevDependencies

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
   
   

## Queries 🛣️:sparkles:

1. Create an Endpoint that allows listing all "Bodegas" ordered alphabetically.

   ```
   Method: GET
   
   URL:
   	http://localhost:5055/bodegas/abc
   
   Result:
       [
         {
           "_id": "64e6050e7d1c330351a821ce",
           "id": 3,
           "nombre": "almacen1",
           "id_responsable": 2,
           "estado": 1,
           "created_by": 2,
           "updated_by": 2,
           "created_at": "2022-06-04T00:00:00.000Z",
           "updated_at": "2022-06-04T00:00:00.000Z"
         },
         ...
        ]
   ```

   

2. Create an Endpoint that allows creating a "Bodega".

   ```
   Method: POST
   
   URL:
   	http://localhost:5055/bodegas/new
   	
   Example:
       {
           "id": 31,
           "nombre": "bodegaLOL",
           "id_responsable": 20,
           "estado": 1,
           "created_by": 10,
           "updated_by": 10,
           "created_at": "2023-08-17",
           "updated_at": "2023-08-17"
       }
       
   Result:
       { 
       status: 201,
       message: "Created :)" 
       }
   ```

   

3. Create an Endpoint that allows listing all products in descending order based on the "Total" field.

   ```
   Method: GET
   
   URL:
   	http://localhost:5055/productos/total
   	
   Result:
       [
         {
           "_id": 21,
           "nombre": "producto21",
           "descripcion": "producto21",
           "estado": 1,
           "created_by": 1,
           "created_at": "2023-07-14T00:00:00.000Z",
           "updated_at": "2023-07-14T00:00:00.000Z",
           "Total": 1800
           },
           ...
       ]
   ```

   

4. Create an Endpoint that enables the insertion of a product while also assigning an initial quantity of it to the inventory table within a default 'Bodega'

   ```
   Method: POST
   
   URL:
   	http://localhost:5055/productos/post
   	
   Example:
       {
           "id": 31,
           "nombre": "producto31",
           "descripcion": "producto31",
           "estado": 1,
           "created_by": 12,
           "updated_by": 12,
           "created_at": "2023-08-17",
           "updated_at": "2023-08-17"
       }
   
   Result:
       { 
       status: 200, 
       message: "Product inserted and inventory updated successfully :)" 
       }
   ```

   

5. Create an Endpoint that facilitates the insertion of records into the inventories table. The input parameters should include (id_product, id_warehouse, quantity).

   ```
   Method: POST
   
   URL:
   	http://localhost:5055/inventarios/post
   
   Example of Add a new "Inventario":
       {
         "id": 31,
         "id_bodega": 5,
         "id_producto": 31,
         "cantidad": 300,
         "created_by": 3,
         "updated_by": 3,
         "created_at": "2023-08-18",
         "updated_at": "2023-08-18"
       }
   
   Example of Updated a existing "Inventario":
       {
         "id": 31,
         "id_bodega": 1,
         "id_producto": 1,
         "cantidad": 300,
         "created_by": 3,
         "updated_by": 3,
         "created_at": "2023-08-18",
         "updated_at": "2023-08-18"
       }
   
   Result of Add a new "Inventario":
       { 
           status: 200, 
           message: "Inventory entry updated successfully" 
       }
       
   Result of Update a old "Inventario":
       { 
           status: 200, 
           message: "Inventory entry updated successfully" 
       }
   ```

   

6. Implement an Endpoint that enables the transfer of a product from one "Bodega" to another

   ```
   Method: POST
   
   URL:
   	http://localhost:5055/historiales/traslado
   	
   Example:
       {
         "id":31,
         "id_producto":1,
         "cantidad":3,
         "id_inventario":2,
         "id_bodega_origen":1,
         "id_bodega_destino":2,
         "created_by":1,
         "updated_by":1,
         "created_at": "2023-08-22",
         "updated_at": "2023-08-22"
       }
   
   Result:
       {
           status: 200, 
           message: "Transfer successful, history entry created successfully" 
       }
   ```

   