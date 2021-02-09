import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToMany,
} from "typeorm";
import { PostParagraph } from "../post_paragraph";
import { Result } from "../result";
import { User } from "../user";

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

    @OneToMany(() => Result, (result) => result.image)
    results: Result[];
}
