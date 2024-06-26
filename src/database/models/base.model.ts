import { AutoIncrement, Column, Model, PrimaryKey } from 'sequelize-typescript';

import { IBaseModel } from '@Interfaces';

export class BaseModel<T, G> extends Model<T, G> implements IBaseModel {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;
}
