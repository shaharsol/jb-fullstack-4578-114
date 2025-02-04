import { AllowNull, Column, DataType, Default, Model, PrimaryKey, Table } from "sequelize-typescript";

@Table({
    underscored: true
})
export default class User extends Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string
    
    @AllowNull(false)
    @Column
    name: string
    
    @AllowNull(false)
    @Column
    username: string
    
    @AllowNull(false)
    @Column
    password: string
}
