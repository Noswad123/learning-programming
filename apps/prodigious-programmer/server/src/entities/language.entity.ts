import { Entity, PrimaryGeneratedColumn, Column,} from 'typeorm';

@Entity('languages')
export class Language {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: true })
  documentation_url: string;

  @Column({ nullable: true })
  version: string;

  // @Column()
  // created_at: Date;

  // @Column()
  // updated_at: Date;
}

