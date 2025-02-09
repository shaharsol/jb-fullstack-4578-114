import { 
    AllowNull, 
    Column, 
    DataType, 
    Default, 
    Index, 
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";

@Table({
    underscored: true
})
export default class Post extends Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string
    
    @AllowNull(false)
    @Column(DataType.UUID)
    userId: string
    
    @AllowNull(false)
    @Column(DataType.STRING(40))
    title: string
    
    @AllowNull(false)
    @Column(DataType.TEXT)
    body: string
}
