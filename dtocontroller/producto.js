var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';
export class Producto {
    constructor(data) {
        Object.assign(this, data);
        this.id = 0;
        this.nombre = "";
        this.descripcion = "";
        this.estado = 0;
        this.created_by = 0;
        this.updated_by = 0;
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: 'The parameter "Id" is required' }),
    IsInt({ message: 'The parameter "Id" must be a number' }),
    __metadata("design:type", Number)
], Producto.prototype, "id", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: 'The parameter "nombre" is required' }),
    IsString({ message: 'The parameter "nombre" must be a string' }),
    __metadata("design:type", String)
], Producto.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'descripcion' }),
    IsDefined({ message: 'The parameter "descripcion" is required' }),
    IsString({ message: 'The parameter "descripcion" must be a string' }),
    __metadata("design:type", String)
], Producto.prototype, "descripcion", void 0);
__decorate([
    Expose({ name: 'estado' }),
    IsDefined({ message: 'The parameter "estado" is required' }),
    IsInt({ message: 'The parameter "estado" must be a number' }),
    __metadata("design:type", Number)
], Producto.prototype, "estado", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    IsDefined({ message: 'The parameter "createdBy" is required' }),
    IsInt({ message: 'The parameter "createdBy" must be a number' }),
    __metadata("design:type", Number)
], Producto.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'updated_by' }),
    IsDefined({ message: 'The parameter "updatedBy" is required' }),
    IsInt({ message: 'The parameter "updatedBy" must be a number' }),
    __metadata("design:type", Number)
], Producto.prototype, "updated_by", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    IsDefined({ message: 'The parameter "createdAt" is required' }),
    IsString({ message: 'The parameter "createdAt" must be a string' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'The parameter "createdAt" has an invalid format' }),
    __metadata("design:type", Date)
], Producto.prototype, "created_at", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    IsDefined({ message: 'The parameter "updatedAt" is required' }),
    IsString({ message: 'The parameter "updatedAt" must be a string' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'The parameter "updatedAt" has an invalid format' }),
    __metadata("design:type", Date)
], Producto.prototype, "updated_at", void 0);
