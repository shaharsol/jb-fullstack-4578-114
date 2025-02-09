import { 
    AllowNull, 
    BelongsToMany, 
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
import Comment from "./comment";
import Follow from "./follow";

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
    @Column(DataType.STRING(64))
    password: string

    @HasMany(() => Post, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    posts: Post[]

    @HasMany(() => Comment)
    comments: Comment[]

    @BelongsToMany(() => User, () => Follow, 'followeeId', 'followerId')
    followers: User[]

    @BelongsToMany(() => User, () => Follow, 'followerId', 'followeeId')
    following: User[]

}
