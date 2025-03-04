import { 
    AllowNull, 
    Column, 
    DataType, 
    Default, 
    HasMany,
    Model, 
    PrimaryKey, 
    Table 
} from "sequelize-typescript";
import Product from "./product";

@Table({
    underscored: true,
})
export default class Category extends Model{

    @PrimaryKey
    @Default(DataType.UUIDV4)
    @Column(DataType.UUID)
    id: string
    
    @AllowNull(false)
    @Column
    name: string

    @HasMany(() => Product)
    products: Product[]


}
