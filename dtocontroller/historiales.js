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
import { IsDefined, IsString, Matches } from 'class-validator';
export class Historial {
    constructor(data) {
        Object.assign(this, data);
        this.id = 0;
        this.cantidad = 0;
        this.id_bodega_origen = 0;
        this.id_bodega_destino = 0;
        this.id_inventario = 0;
        this.created_by = 0;
        this.updated_by = 0;
        this.created_at = "1991-01-01";
        this.updated_at = "1991-01-01";
        this.delete_at = "1991-01-01";
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: () => { throw { status: 422, message: `The parameter 'historialId' is required` }; } }),
    __metadata("design:type", Number)
], Historial.prototype, "id", void 0);
__decorate([
    Expose({ name: 'cantidad' }),
    IsDefined({ message: () => { throw { status: 422, message: `The parameter 'cantidad' is required` }; } }),
    __metadata("design:type", Number)
], Historial.prototype, "cantidad", void 0);
__decorate([
    Expose({ name: 'id_bodega_origen' }),
    IsDefined({ message: () => { throw { status: 422, message: `The parameter 'bodegaOrigen' is required` }; } }),
    __metadata("design:type", Number)
], Historial.prototype, "id_bodega_origen", void 0);
__decorate([
    Expose({ name: 'id_bodega_destino' }),
    IsDefined({ message: () => { throw { status: 422, message: `The parameter 'bodegaDestino' is required` }; } }),
    __metadata("design:type", Number)
], Historial.prototype, "id_bodega_destino", void 0);
__decorate([
    Expose({ name: 'id_inventario' }),
    IsDefined({ message: () => { throw { status: 422, message: `The parameter 'inventarioId' is required` }; } }),
    __metadata("design:type", Number)
], Historial.prototype, "id_inventario", void 0);
__decorate([
    Expose({ name: 'created_by' }),
    IsDefined({ message: () => { throw { status: 422, message: `The parameter 'createdBy' is required` }; } }),
    __metadata("design:type", Number)
], Historial.prototype, "created_by", void 0);
__decorate([
    Expose({ name: 'updated_by' }),
    IsDefined({ message: () => { throw { status: 422, message: `The parameter 'updatedBy' is required` }; } }),
    __metadata("design:type", Number)
], Historial.prototype, "updated_by", void 0);
__decorate([
    Expose({ name: 'created_at' }),
    IsString({ message: `The parameter 'createdAt' must be a string` }),
    Matches(/^\d{4}-\d{2}-\d{2$}/, { message: 'Error' }),
    __metadata("design:type", String)
], Historial.prototype, "created_at", void 0);
__decorate([
    Expose({ name: 'updated_at' }),
    IsString({ message: `The parameter 'updatedAt' must be a string` }),
    Matches(/^\d{4}-\d{2}-\d{2$}/, { message: 'Error' }),
    __metadata("design:type", String)
], Historial.prototype, "updated_at", void 0);
__decorate([
    Expose({ name: 'delete_at' }),
    IsString({ message: `The parameter 'deletedAt' must be a string` }),
    Matches(/^\d{4}-\d{2}-\d{2$}/, { message: 'Error' }),
    __metadata("design:type", String)
], Historial.prototype, "delete_at", void 0);
;
