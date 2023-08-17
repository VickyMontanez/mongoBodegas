import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Bodega {

    @Expose({ name: 'id' })
    @IsDefined({ message: 'The parameter "Id" is required' })
    @IsInt({ message: 'The parameter "Id" must be a number' })
    id: number;

    @Expose({ name: 'nombre' })
    @IsDefined({ message: 'The parameter "nombre" is required' })
    @IsString({ message: 'The parameter "nombre" must be a string' })
    nombre: string;

    @Expose({ name: 'id_responsable' })
    @IsDefined({ message: 'The parameter "id_responsable" is required' })
    @IsInt({ message: 'The parameter "id_responsable" must be a number' })
    id_responsable: number;

    @Expose({ name: 'estado' })
    @IsDefined({ message: 'The parameter "estado" is required' })
    @IsInt({ message: 'The parameter "estado" must be a number' })
    estado: number;

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

    constructor(data: Partial<Bodega>) {
        Object.assign(this, data);
        this.id = 0;
        this.nombre = "Bodega23";
        this.id_responsable = 0;
        this.estado = 0;
        this.created_by = 0;
        this.updated_by = 0;
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}
