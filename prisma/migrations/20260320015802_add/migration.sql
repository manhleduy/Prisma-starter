-- CreateTable
CREATE TABLE "Car" (
    "car_id" SERIAL NOT NULL,
    "origin" TEXT NOT NULL,
    "power" INTEGER NOT NULL,
    "bought_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ownerId" INTEGER NOT NULL,

    CONSTRAINT "Car_pkey" PRIMARY KEY ("car_id")
);

-- AddForeignKey
ALTER TABLE "Car" ADD CONSTRAINT "ownerId" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
