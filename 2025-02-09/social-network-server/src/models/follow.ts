import { 
    AllowNull, 
    Column, 
    DataType, 
    Default, 
    ForeignKey, 
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";
import User from "./user";

@Table({
    underscored: true
})
export default class Follow extends Model{

    @PrimaryKey
    @ForeignKey(() => User)
    @Column(DataType.UUID)
    followerId: string

    @PrimaryKey
    @ForeignKey(() => User)
    @Column(DataType.UUID)
    followeeId: string
}
