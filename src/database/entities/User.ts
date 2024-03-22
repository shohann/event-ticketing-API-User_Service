import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Index
} from "typeorm";
import { IUser } from "../../models/IUser";

export enum Role {
    USER = 'user',
    ADMIN = 'admin'
}

@Entity('user')
export class User implements IUser {
    @PrimaryGeneratedColumn()
    id: number

    @Index({ unique: true })
    @Column()
    email: string;

    @Column()
    userName: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @Column()
    password: string;

    @Column({
        type: 'enum',
        enum: Role,
        default: Role.USER
    })
    role: Role;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
};

// https://www.kindacode.com/snippet/using-enum-type-in-typeorm/