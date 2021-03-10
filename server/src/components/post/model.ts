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
import { File } from "../file";
import { PostParagraph } from "../post_paragraph";

@Entity()
export class Post extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  title: string;

  @Column()
  slug: string;

  @Column()
  description: string;

  @Column({ nullable: false })
  image_id: number;

  @ManyToOne(() => File, (file) => file, { cascade: true })
  @JoinColumn({ name: "image_id" })
  image: File;

  @OneToMany(() => PostParagraph, (paragraph) => paragraph.post)
  paragraphs: PostParagraph[];

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamp" })
  updatedAt: Date;
}
