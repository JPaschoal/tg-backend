import {MigrationInterface, QueryRunner} from "typeorm";

export class createNoteFilesTable1616948431109 implements MigrationInterface {
    name = 'createNoteFilesTable1616948431109'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `note_files` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `path` varchar(255) NOT NULL, `created_at` datetime NOT NULL, `note_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `note_files` ADD CONSTRAINT `FK_fc0fb2062cc3ef56fec95b62d59` FOREIGN KEY (`note_id`) REFERENCES `notes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `note_files` DROP FOREIGN KEY `FK_fc0fb2062cc3ef56fec95b62d59`");
        await queryRunner.query("DROP TABLE `note_files`");
    }

}
