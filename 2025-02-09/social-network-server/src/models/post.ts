import { 
    AllowNull, 
    BelongsTo, 
    Column, 
    DataType, 
    Default, 
    ForeignKey, 
    Index, 
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";
import User from "./user";

@Table({
    underscored: true
})
export default class Post extends Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string
    
    @ForeignKey(() => User)
    @AllowNull(false)
    @Column(DataType.UUID)
    userId: string
    
    @AllowNull(false)
    @Column(DataType.STRING(40))
    title: string
    
    @AllowNull(false)
    @Column(DataType.TEXT)
    body: string

    @BelongsTo(() => User)
    user: User

}
