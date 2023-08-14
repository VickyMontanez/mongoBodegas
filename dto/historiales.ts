import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches} from 'class-validator';
export class Historial {

    @Expose({ name: 'historialId' })
    @IsDefined({ message: () => { throw { status: 422, message: `The parameter 'historialId' is required` } } })
    id: number;

    @Expose({ name: 'cantidad' })
    @IsDefined({ message: () => { throw { status: 422, message: `The parameter 'cantidad' is required` } } })
    cantidad: number;

    @Expose({ name: 'bodegaOrigen' })
    @IsDefined({ message: () => { throw { status: 422, message: `The parameter 'bodegaOrigen' is required` } } })
    id_bodega_origen: number;

    @Expose({ name: 'bodegaDestino' })
    @IsDefined({ message: () => { throw { status: 422, message: `The parameter 'bodegaDestino' is required` } } })
    id_bodega_destino: number;

    @Expose({ name: 'inventarioId' })
    @IsDefined({ message: () => { throw { status: 422, message: `The parameter 'inventarioId' is required` } } })
    id_inventario: number;

    @Expose({ name: 'createdBy' })
    @IsDefined({ message: () => { throw { status: 422, message: `The parameter 'createdBy' is required` } } })
    created_by: number;

    @Expose({ name: 'updatedBy' })
    @IsDefined({ message: () => { throw { status: 422, message: `The parameter 'updatedBy' is required` } } })
    updated_by: number;

    @Expose({ name: 'createdAt' })
    @IsString ({ message: `The parameter 'createdAt' must be a string`})
    @Matches(/^\d{4}-\d{2}-\d{2$}/,{message: 'Error'})
    created_at: string;

    @Expose({ name: 'updatedAt' })
    @IsString ({ message: `The parameter 'updatedAt' must be a string`})
    @Matches(/^\d{4}-\d{2}-\d{2$}/,{message: 'Error'})
    updated_at: string;

    @Expose({ name: 'deletedAt' })
    @IsString ({ message: `The parameter 'deletedAt' must be a string`})
    @Matches(/^\d{4}-\d{2}-\d{2$}/,{message: 'Error'})
    deleted_at: string;

    constructor(data: Partial<Historial>) {
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
        this.deleted_at = "1991-01-01";
        
    }
};