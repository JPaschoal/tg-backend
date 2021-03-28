import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createNotesTable1616946821271 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'notes',
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
                    name: 'text',
                    type: 'longtext'
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
                    name: 'notebook_id',
                    type: 'integer'
                }
            ],
            foreignKeys: [
                {
                    name: 'NotesNotebook',
                    columnNames: ['notebook_id'],
                    referencedTableName: 'notebooks',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('notes')
    }

}
