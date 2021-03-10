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

  @Column({ default: 0 })
  tokenVersion: number;

  @Column({ default: "student" })
  role: roles;

  @Column({ default: "" })
  password: string;

  @Column({ nullable: true })
  user_id: number;
  @OneToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "user_id" })
  user: User;
}
