
import { Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('concepts')
export class Concept {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;
}
