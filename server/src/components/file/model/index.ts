import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Post, PostParagraph } from "../../post";
import { Result, Test, TestParagraph } from "../../test";
import { User } from "../../user";

@Entity()
export class File extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: false })
  size: number;

  @Column()
  path: string;

  @OneToMany(() => User, (userInfo) => userInfo.avatar)
  users: User[];

  @OneToMany(() => PostParagraph, (postParagraph) => postParagraph.image)
  postParagraphs: PostParagraph[];

  @OneToMany(() => TestParagraph, (testParagraph) => testParagraph.image)
  testParagraphs: PostParagraph[];

  @OneToMany(() => Post, (post) => post.image)
  posts: Post[];

  @OneToMany(() => Test, (test) => test.image)
  tests: Test[];

  @OneToMany(() => Result, (result) => result.image)
  results: Result[];
}
