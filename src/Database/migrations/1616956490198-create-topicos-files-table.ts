import {MigrationInterface, QueryRunner} from "typeorm";

export class createTopicosFilesTable1616956490198 implements MigrationInterface {
    name = 'createTopicosFilesTable1616956490198'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `file_topicos` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `path` varchar(255) NOT NULL, `sended_at` datetime NOT NULL, `topico_id` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `file_topicos` ADD CONSTRAINT `FK_7d8ce497b8cb75b58b5fa0905c8` FOREIGN KEY (`topico_id`) REFERENCES `topicos`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `file_topicos` DROP FOREIGN KEY `FK_7d8ce497b8cb75b58b5fa0905c8`");
        await queryRunner.query("DROP TABLE `file_topicos`");
    }

}
