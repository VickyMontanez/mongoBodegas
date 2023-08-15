import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches} from 'class-validator';
export class Historial {

    @Expose({ name: 'id' })
    @IsDefined({ message: () => { throw { status: 422, message: `The parameter 'historialId' is required` } } })
    id: number;

    @Expose({ name: 'cantidad' })
    @IsDefined({ message: () => { throw { status: 422, message: `The parameter 'cantidad' is required` } } })
    cantidad: number;

    @Expose({ name: 'id_bodega_origen' })
    @IsDefined({ message: () => { throw { status: 422, message: `The parameter 'bodegaOrigen' is required` } } })
    id_bodega_origen: number;

    @Expose({ name: 'id_bodega_destino' })
    @IsDefined({ message: () => { throw { status: 422, message: `The parameter 'bodegaDestino' is required` } } })
    id_bodega_destino: number;

    @Expose({ name: 'id_inventario' })
    @IsDefined({ message: () => { throw { status: 422, message: `The parameter 'inventarioId' is required` } } })
    id_inventario: number;

    @Expose({ name: 'created_by' })
    @IsDefined({ message: () => { throw { status: 422, message: `The parameter 'createdBy' is required` } } })
    created_by: number;

    @Expose({ name: 'updated_by' })
    @IsDefined({ message: () => { throw { status: 422, message: `The parameter 'updatedBy' is required` } } })
    updated_by: number;

    @Expose({ name: 'created_at' })
    @IsString ({ message: `The parameter 'createdAt' must be a string`})
    @Matches(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$/,{message: 'Error'})
    created_at: string;

    @Expose({ name: 'updated_at' })
    @IsString ({ message: `The parameter 'updatedAt' must be a string`})
    @Matches(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$/,{message: 'Error'})
    updated_at: string;

    @Expose({ name: 'delete_at' })
    @IsString ({ message: `The parameter 'deletedAt' must be a string`})
    @Matches(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{1,3})?Z$/,{message: 'Error'})
    delete_at: string;

    constructor(data: Partial<Historial>) {
        Object.assign(this, data);
        this.id = 0;
        this.cantidad = 0;
        this.id_bodega_origen = 0;
        this.id_bodega_destino = 0;
        this.id_inventario = 0;
        this.created_by = 0;
        this.updated_by = 0;
        this.created_at = "";
        this.updated_at = "";
        this.delete_at = "";
        
    }
};