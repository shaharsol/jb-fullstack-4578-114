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
export default class Comment extends Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string
    
    @AllowNull(false)
    @Column(DataType.UUID)
    postId: string

    @AllowNull(false)
    @Column(DataType.UUID)
    userId: string

    @AllowNull(false)
    @Column(DataType.TEXT)
    body: string
}
