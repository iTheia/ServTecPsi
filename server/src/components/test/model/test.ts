import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Question } from "./question";
import { Result } from "./result";
import { TestParagraph } from "./paragraph";
import { File } from "../../file";

@Entity()
export class Test extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  slug: string;

  @Column({ nullable: false })
  image_id: number;

  @ManyToOne(() => File, (file) => file.tests, { cascade: true })
  @JoinColumn({ name: "image_id" })
  image: File;

  @OneToMany(() => TestParagraph, (paragraph) => paragraph.test)
  paragraphs: TestParagraph[];

  @OneToMany(() => Question, (question) => question.test)
  questions: Question[];

  @OneToMany(() => Result, (result) => result.test)
  results: Result[];

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
