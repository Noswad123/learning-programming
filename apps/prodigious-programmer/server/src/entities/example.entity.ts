import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Language } from './language.entity';
import { Concept } from './concept.entity';

@Entity()
export class Example {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  codeSnippet: string;

  @Column({ nullable: true })
  explanation: string;

  @ManyToOne(() => Language, (language) => language.id)
  @JoinColumn({ name: 'language_id' })
  language: Language;

  @ManyToOne(() => Concept, (concept) => concept.id)
  @JoinColumn({ name: 'concept_id' })
  concept: Concept;
}