import {MigrationInterface, QueryRunner} from "typeorm";

export class createTopicosTable1616956420505 implements MigrationInterface {
    name = 'createTopicosTable1616956420505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `topicos` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `text` varchar(255) NOT NULL, `course` varchar(255) NOT NULL, `subject` varchar(255) NOT NULL, `student_ra` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `topicos` ADD CONSTRAINT `FK_c0410b5f42d6860b84e1dc726c9` FOREIGN KEY (`student_ra`) REFERENCES `students`(`ra`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `topicos` DROP FOREIGN KEY `FK_c0410b5f42d6860b84e1dc726c9`");
        await queryRunner.query("DROP TABLE `topicos`");
    }

}
