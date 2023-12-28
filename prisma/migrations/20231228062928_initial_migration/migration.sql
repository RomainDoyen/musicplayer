/*
  Warnings:

  - Added the required column `url` to the `Music` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Music" ADD COLUMN     "url" TEXT NOT NULL;
