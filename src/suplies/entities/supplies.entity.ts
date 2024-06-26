// Create an entity named supplies with the columns id, name, description, isConsumable, materialType

import { Consultation } from 'src/consultation/entities/consultation.entity';
import { Procedure } from 'src/procedures/entities/procedures.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToMany,
} from 'typeorm';

@Entity('supplies')
export class Supplies extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => Consultation, (consultation) => consultation.supplies)
  consultations: Consultation[];

  @Column({ nullable: false, type: 'varchar', length: 200 })
  name: string;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  description: string;

  @Column({ default: false, type: 'boolean' })
  isConsumable: boolean;

  @Column({ nullable: false, type: 'varchar', length: 200 })
  materialType: string;

  @ManyToMany(() => Procedure, (procedure) => procedure.supplies)
  procedures: Procedure[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  constructor(partial: Partial<Supplies>) {
    super();
    Object.assign(this, partial);
  }
}
