import {
    BaseEntity,
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
} from "typeorm";
import { File } from "../file";
import { Test } from "../test/model";

@Entity()
export class Result extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    value: number;

    @Column()
    text: string;

    @Column()
    image_id: number;

    @ManyToOne(() => File, (file) => file.results)
    @JoinColumn({ name: "image_id" })
    image: File;

    @Column()
    test_id: number;

    @ManyToOne(() => Test, (test) => test.results)
    @JoinColumn({ name: "test_id" })
    test: Test;
}
