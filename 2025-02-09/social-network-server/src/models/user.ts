import { 
    AllowNull, 
    Column, 
    DataType, 
    Default, 
    HasMany, 
    Index, 
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";
import Post from "./post";

@Table({
    underscored: true,
})
export default class User extends Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string
    
    @AllowNull(false)
    @Column(DataType.STRING(40))
    name: string
    
    @Index({ unique: true })
    @AllowNull(false)
    @Column(DataType.STRING(40))
    username: string
    
    @AllowNull(false)
    @Column(DataType.STRING(32))
    password: string

    @HasMany(() => Post, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    posts: Post[]
}
