import {MigrationInterface, QueryRunner} from "typeorm";

export class creatingTables1616987608770 implements MigrationInterface {
    name = 'creatingTables1616987608770'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `note_files` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `path` varchar(255) NOT NULL, `created_at` datetime NOT NULL, `noteId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `notes` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `text` varchar(255) NOT NULL, `created_at` datetime NOT NULL, `updated_at` datetime NOT NULL, `notebookId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `notebooks` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `subject` varchar(255) NOT NULL, `created_at` datetime NOT NULL, `updated_at` datetime NOT NULL, `studentRa` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `files_topic` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `path` varchar(255) NOT NULL, `sended_at` datetime NOT NULL, `topicId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `topics` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `text` varchar(255) NOT NULL, `course` varchar(255) NOT NULL, `subject` varchar(255) NOT NULL, `studentRa` varchar(255) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `students` (`ra` varchar(255) NOT NULL, `profile_image` varchar(255) NOT NULL, PRIMARY KEY (`ra`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `comments` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, `text` varchar(255) NOT NULL, `sender_at` datetime NOT NULL, `studentRa` varchar(255) NULL, `topicId` int NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `note_files` ADD CONSTRAINT `FK_0a2fb4bf21dee2434329fd24034` FOREIGN KEY (`noteId`) REFERENCES `notes`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `notes` ADD CONSTRAINT `FK_d84382f58ca053c3532fe78b05b` FOREIGN KEY (`notebookId`) REFERENCES `notebooks`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `notebooks` ADD CONSTRAINT `FK_3430d2ded41919b33584d6eb10a` FOREIGN KEY (`studentRa`) REFERENCES `students`(`ra`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `files_topic` ADD CONSTRAINT `FK_53fd208ffc06970c41e0f322b91` FOREIGN KEY (`topicId`) REFERENCES `topics`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `topics` ADD CONSTRAINT `FK_a57b80fac02d861c7f4a68cd539` FOREIGN KEY (`studentRa`) REFERENCES `students`(`ra`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `comments` ADD CONSTRAINT `FK_75c33831f561ef1b22df5aa4195` FOREIGN KEY (`studentRa`) REFERENCES `students`(`ra`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `comments` ADD CONSTRAINT `FK_53700e514961e51a0bdf688ee71` FOREIGN KEY (`topicId`) REFERENCES `topics`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `comments` DROP FOREIGN KEY `FK_53700e514961e51a0bdf688ee71`");
        await queryRunner.query("ALTER TABLE `comments` DROP FOREIGN KEY `FK_75c33831f561ef1b22df5aa4195`");
        await queryRunner.query("ALTER TABLE `topics` DROP FOREIGN KEY `FK_a57b80fac02d861c7f4a68cd539`");
        await queryRunner.query("ALTER TABLE `files_topic` DROP FOREIGN KEY `FK_53fd208ffc06970c41e0f322b91`");
        await queryRunner.query("ALTER TABLE `notebooks` DROP FOREIGN KEY `FK_3430d2ded41919b33584d6eb10a`");
        await queryRunner.query("ALTER TABLE `notes` DROP FOREIGN KEY `FK_d84382f58ca053c3532fe78b05b`");
        await queryRunner.query("ALTER TABLE `note_files` DROP FOREIGN KEY `FK_0a2fb4bf21dee2434329fd24034`");
        await queryRunner.query("DROP TABLE `comments`");
        await queryRunner.query("DROP TABLE `students`");
        await queryRunner.query("DROP TABLE `topics`");
        await queryRunner.query("DROP TABLE `files_topic`");
        await queryRunner.query("DROP TABLE `notebooks`");
        await queryRunner.query("DROP TABLE `notes`");
        await queryRunner.query("DROP TABLE `note_files`");
    }

}
