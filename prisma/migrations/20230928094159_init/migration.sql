-- CreateTable
CREATE TABLE "tabs" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "tabs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tabGroups" (
    "id" SERIAL NOT NULL,
    "tab_array_json" JSONB NOT NULL,
    "tag" TEXT,

    CONSTRAINT "tabGroups_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "tabs_url_key" ON "tabs"("url");
