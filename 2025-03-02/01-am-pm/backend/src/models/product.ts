import { 
    AllowNull, 
    BelongsTo, 
    Column, 
    DataType, 
    Default, 
    ForeignKey, 
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";
import Category from "./category";

@Table({
    underscored: true,
})
export default class Product extends Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string

    @AllowNull(false)
    @Column
    name: string

    @AllowNull(false)
    @Column(DataType.DATE)
    productionTime: Date
    
    @AllowNull(false)
    @Column(DataType.DATE)
    expirationTime: Date

    @ForeignKey(() => Category)
    @AllowNull(false)
    @Column(DataType.UUID)
    categoryId: string

    @AllowNull(false)
    @Column(DataType.DECIMAL)
    price: number;

    @BelongsTo(() => Category)
    category: Category

}
