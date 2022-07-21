# DEPACOMP-API

## Models

```text
npx sequelize-cli model:generate --name DocumentoTipo --attributes nombre:string
npx sequelize-cli model:generate --name SeguimientoTipo --attributes nombre:string
npx sequelize-cli model:generate --name Genero --attributes nombre:string
npx sequelize-cli model:generate --name Rol --attributes nombre:string
npx sequelize-cli model:generate --name Pais --attributes nombre:string,nacionalidad:string,iso:string
npx sequelize-cli model:generate --name Provincia --attributes nombre:string
npx sequelize-cli model:generate --name Localidad --attributes nombre:string
npx sequelize-cli model:generate --name Instituto --attributes nombre:string
npx sequelize-cli model:generate --name Carrera --attributes nombre:string
npx sequelize-cli model:generate --name Estado --attributes nombre:string,color:string
npx sequelize-cli model:generate --name Categoria --attributes nombre:string,color:string
npx sequelize-cli model:generate --name Seguimiento --attributes nombre:string,motivo:string
npx sequelize-cli model:generate --name Entrevista --attributes nombre:string,observaciones:string,acciones:string
npx sequelize-cli model:generate --name Persona --attributes nombre:string,apellido:string,email:string,password:string,documento:string
```

## Seeds

```text
npx sequelize-cli seed:generate --name create-genero
npx sequelize-cli seed:generate --name create-documentoTipo
npx sequelize-cli seed:generate --name create-seguimientoTipo
npx sequelize-cli seed:generate --name create-rol
npx sequelize-cli seed:generate --name create-pais
npx sequelize-cli seed:generate --name create-provincia
npx sequelize-cli seed:generate --name create-localidad
npx sequelize-cli seed:generate --name create-instituto
npx sequelize-cli seed:generate --name create-carrera
npx sequelize-cli seed:generate --name create-estado
npx sequelize-cli seed:generate --name create-categoria
npx sequelize-cli seed:generate --name create-seguimiento
npx sequelize-cli seed:generate --name create-entrevista
npx sequelize-cli seed:generate --name create-persona
```
