/*
  Warnings:

  - You are about to drop the `pricingForm` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "pricingForm";

-- CreateTable
CREATE TABLE "PricingForm" (
    "id" TEXT NOT NULL,
    "fullName" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "organization" TEXT NOT NULL,
    "jobTitle" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "numberOfHires" TEXT NOT NULL,
    "productSelection" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PricingForm_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PricingForm_email_key" ON "PricingForm"("email");
