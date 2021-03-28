import {MigrationInterface, QueryRunner} from "typeorm";

export class createTableNotes1616947707421 implements MigrationInterface {
    name = 'createTableNotes1616947707421'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `notebooks` DROP FOREIGN KEY `NotebookStudent`");
        await queryRunner.query("CREATE TABLE `notes` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `text` varchar(255) NOT NULL, `created_at` datetime NOT NULL, `updated_at` datetime NOT NULL, `notebook_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `notebooks` CHANGE `id` `id` int NOT NULL AUTO_INCREMENT");
        await queryRunner.query("ALTER TABLE `notebooks` CHANGE `student_ra` `student_ra` varchar(255) NULL");
        await queryRunner.query("ALTER TABLE `notes` ADD CONSTRAINT `FK_5fc0ea735221c66d576d074221f` FOREIGN KEY (`notebook_id`) REFERENCES `notebooks`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `notebooks` ADD CONSTRAINT `FK_13b610b45e722a2652ac12c60ea` FOREIGN KEY (`student_ra`) REFERENCES `students`(`ra`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `notebooks` DROP FOREIGN KEY `FK_13b610b45e722a2652ac12c60ea`");
        await queryRunner.query("ALTER TABLE `notes` DROP FOREIGN KEY `FK_5fc0ea735221c66d576d074221f`");
        await queryRunner.query("ALTER TABLE `notebooks` CHANGE `student_ra` `student_ra` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `notebooks` CHANGE `id` `id` int UNSIGNED NOT NULL AUTO_INCREMENT");
        await queryRunner.query("DROP TABLE `notes`");
        await queryRunner.query("ALTER TABLE `notebooks` ADD CONSTRAINT `NotebookStudent` FOREIGN KEY (`student_ra`) REFERENCES `students`(`ra`) ON DELETE CASCADE ON UPDATE CASCADE");
    }

}
