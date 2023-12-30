import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.music.create({
        data: {
            title: 'Free Test Data - 1MB MP3',
            artist: 'Free Test Data',
            image: 'https://freetestdata.com/wp-content/uploads/2022/02/Free_Test_Data_117KB_JPG.jpg',
            url: 'https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_1MB_MP3.mp3',
            duration: 431,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    })

    await prisma.music.create({
        data: {
            title: 'Free Test Data - 10MB MP3',
            artist: 'Free Test Data',
            image: 'https://freetestdata.com/wp-content/uploads/2022/02/Free_Test_Data_128KB_JPG.jpg',
            url: 'https://freetestdata.com/wp-content/uploads/2021/09/Free_Test_Data_100KB_MP3.mp3',
            duration: 4278,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    })

    await prisma.music.create({
        data: {
            title: '36002836_DOYEN_ROMAIN_REAPER_18_TnB-ESJACKANC',
            artist: 'DOYEN ROMAIN',
            image: '',
            url: '../music/36002836_DOYEN_ROMAIN_REAPER_18_TnB-ESJACKANC.mp3',
            duration: 0,
            createdAt: new Date(),
            updatedAt: new Date(),
        },
    })
}

main() 
    .catch(e => console.error(e))
    .finally(async () => {
        await prisma.$disconnect()
    })
