import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createNotebooksTable1616942209430 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'notebooks',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment'
                },
                {
                    name: 'name',
                    type: 'varchar'
                },
                {
                    name: 'subject',
                    type: 'varchar'
                },
                {
                    name: 'created_at',
                    type: 'datetime'
                },
                {
                    name: 'updated_at',
                    type: 'datetime'
                },
                {
                    name: 'student_ra',
                    type: 'varchar'
                }
            ],
            foreignKeys: [
                {
                    name: 'NotebookStudent',
                    columnNames: ['student_ra'],
                    referencedTableName: 'students',
                    referencedColumnNames: ['ra'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('notebooks')
    }

}
