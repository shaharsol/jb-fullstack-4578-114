import { 
    AllowNull, 
    Column, 
    DataType, 
    Default, 
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";

@Table({
    underscored: true
})
export default class Follow extends Model{

    @PrimaryKey
    @Column(DataType.UUID)
    followerId: string

    @PrimaryKey
    @Column(DataType.UUID)
    followeeId: string
}
