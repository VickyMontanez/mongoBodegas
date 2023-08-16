import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Historial {

    @Expose({ name: 'id' })
    @IsDefined({ message: 'The parameter "Id" is required' })
    @IsInt({ message: 'The parameter "Id" must be a number' })
    id: number;

    @Expose({ name: 'cantidad' })
    @IsDefined({ message: 'The parameter "cantidad" is required' })
    @IsInt({ message: 'The parameter "cantidad" must be a number' })
    cantidad: number;

    @Expose({ name: 'id_bodega_origen' })
    @IsDefined({ message: 'The parameter "bodegaOrigen" is required' })
    @IsInt({ message: 'The parameter "bodegaOrigen" must be a number' })
    id_bodega_origen: number;

    @Expose({ name: 'id_bodega_destino' })
    @IsDefined({ message: 'The parameter "bodegaDestino" is required' })
    @IsInt({ message: 'The parameter "bodegaDestino" must be a number' })
    id_bodega_destino: number;

    @Expose({ name: 'id_inventario' })
    @IsDefined({ message: 'The parameter "inventarioId" is required' })
    @IsInt({ message: 'The parameter "inventarioId" must be a number' })
    id_inventario: number;

    @Expose({ name: 'created_by' })
    @IsDefined({ message: 'The parameter "createdBy" is required' })
    @IsInt({ message: 'The parameter "createdBy" must be a number' })
    created_by: number;

    @Expose({ name: 'updated_by' })
    @IsDefined({ message: 'The parameter "updatedBy" is required' })
    @IsInt({ message: 'The parameter "updatedBy" must be a number' })
    updated_by: number;

    @Expose({ name: 'created_at' })
    @IsDefined({ message: 'The parameter "createdAt" is required' })
    @IsString({ message: 'The parameter "createdAt" must be a string' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'The parameter "createdAt" has an invalid format' })
    created_at: Date;

    @Expose({ name: 'updated_at' })
    @IsDefined({ message: 'The parameter "updatedAt" is required' })
    @IsString({ message: 'The parameter "updatedAt" must be a string' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'The parameter "updatedAt" has an invalid format' })
    updated_at: Date;

    constructor(data: Partial<Historial>) {
        Object.assign(this, data);
        this.id = 0;
        this.cantidad = 0;
        this.id_bodega_origen = 0;
        this.id_bodega_destino = 0;
        this.id_inventario = 0;
        this.created_by = 0;
        this.updated_by = 0;
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}
