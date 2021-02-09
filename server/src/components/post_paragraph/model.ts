import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { File } from "../file";
import { Post } from "../post";

@Entity()
export class PostParagraph extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    text: string;

    @Column()
    image_id: number;

    @ManyToOne(() => File, (file) => file.postParagraphs)
    @JoinColumn()
    image: File;

    @Column()
    post_id: number;

    @ManyToOne(() => Post, (post) => post.paragraphs)
    @JoinColumn({ name: "post_id" })
    post: Post;
}
