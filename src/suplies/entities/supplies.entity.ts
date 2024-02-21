// Create an entity named supplies with the columns id, name, description, isConsumable, materialType

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Supplies {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  description: string;

  @Column({ default: false, type: 'boolean' })
  isConsumable: boolean;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  materialType: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}