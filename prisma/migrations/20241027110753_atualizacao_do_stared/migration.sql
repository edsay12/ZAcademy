/*
  Warnings:

  - The primary key for the `Stared` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Stared` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Stared" DROP CONSTRAINT "Stared_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "Stared_pkey" PRIMARY KEY ("courseId", "userId");

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "bio" SET DEFAULT 'Estou sempre em busca de aprender e crescer, vamos nos conectar!';
