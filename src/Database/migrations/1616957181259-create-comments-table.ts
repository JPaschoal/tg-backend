import {MigrationInterface, QueryRunner} from "typeorm";

export class createCommentsTable1616957181259 implements MigrationInterface {
    name = 'createCommentsTable1616957181259'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `comments` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `text` varchar(255) NOT NULL, `sender_at` datetime NOT NULL, `student_ra` varchar(255) NULL, `topico_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `comments` ADD CONSTRAINT `FK_fcc71f29134fade77cb2c3fecdf` FOREIGN KEY (`student_ra`) REFERENCES `students`(`ra`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `comments` ADD CONSTRAINT `FK_6237e0b0b1a9f679e47b200a3ab` FOREIGN KEY (`topico_id`) REFERENCES `topicos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `comments` DROP FOREIGN KEY `FK_6237e0b0b1a9f679e47b200a3ab`");
        await queryRunner.query("ALTER TABLE `comments` DROP FOREIGN KEY `FK_fcc71f29134fade77cb2c3fecdf`");
        await queryRunner.query("DROP TABLE `comments`");
    }

}
