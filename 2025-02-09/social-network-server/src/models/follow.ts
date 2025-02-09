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
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    followerId: string

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    followeeId: string
}
