import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    OneToOne,
    JoinColumn,
} from "typeorm";
import { User } from "../user";
import { roles } from "./types";

@Entity()
export class Login extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: false })
    password: string;

    @Column({ default: 0 })
    tokenVersion: number;

    @Column({ default: "basic" })
    role: roles;

    @Column({ default: false })
    isConfirmed: boolean;

    @Column()
    user_id: number;
    @OneToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;
}
