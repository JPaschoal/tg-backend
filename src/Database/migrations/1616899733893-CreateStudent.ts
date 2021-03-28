import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateStudent1616899733893 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'students',
            columns: [
                {
                    name: 'ra',
                    type: 'varchar'
                },
                {
                    name: 'profile_image',
                    type: 'varchar'
                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('students')
    }

}
