/*
  Warnings:

  - You are about to drop the column `ong_id` on the `report` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `report` DROP FOREIGN KEY `Report_ong_id_fkey`;

-- DropIndex
DROP INDEX `Report_ong_id_fkey` ON `report`;

-- AlterTable
ALTER TABLE `report` DROP COLUMN `ong_id`;

-- CreateTable
CREATE TABLE `OngReport` (
    `ongId` INTEGER NOT NULL,
    `reportId` INTEGER NOT NULL,

    PRIMARY KEY (`ongId`, `reportId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OngReport` ADD CONSTRAINT `OngReport_ongId_fkey` FOREIGN KEY (`ongId`) REFERENCES `Ongs`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `OngReport` ADD CONSTRAINT `OngReport_reportId_fkey` FOREIGN KEY (`reportId`) REFERENCES `Report`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
